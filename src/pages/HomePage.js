import React, { useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import { ClipLoader } from 'react-spinners';
import { getManyAstronomy } from '../api/AstronomyAPI';
import AstronomyList from '../components/AstronomyList';
import LoaderContainer from '../elements/LoaderContainer';
import Main from '../elements/Main';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const TODAY = new Date();
const MAX_LIMIT = process.env.REACT_APP_ASTRONOMY_LIMIT || 15;

const HomePage = () => {
	const fetchAstronomy = ({ pageParam: endDate = TODAY }) => {
		const startDate = new Date();
		const dateOffSet = 24 * 60 * 60 * 1000 * MAX_LIMIT;
		startDate.setTime(endDate.getTime() - dateOffSet);
		return getManyAstronomy(startDate, endDate);
	};

	const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery(
		'astronomy',
		fetchAstronomy,
		{
			getNextPageParam: (lastPage, pages) => {
				const lastDate = lastPage[lastPage.length - 1].date;
				try {
					if (lastDate) return new Date(lastDate);
				} catch (error) {
					console.log(error);
				}
				return undefined;
			},
			staleTime: 60 * 1000,
		}
	);

	const endScrollRef = useRef();
	useIntersectionObserver({
		target: endScrollRef,
		onIntersect: fetchNextPage,
		enabled: hasNextPage,
		rootMargin: '100px',
	});

	const astronomyList = data ? data.pages.flat() : [];
	return (
		<Main>
			<AstronomyList items={astronomyList} />
			<LoaderContainer ref={endScrollRef}>
				<ClipLoader color='#000000' loading={isFetching} size={35} />
			</LoaderContainer>
		</Main>
	);
};

export default HomePage;
