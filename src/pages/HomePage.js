import React from 'react';
import { useInfiniteQuery } from 'react-query';
import { getManyAstronomy } from '../api/AstronomyAPI';
import AstronomyList from '../components/AstronomyList';
import Main from '../elements/Main';

const TODAY = new Date();
const MAX_LIMIT = process.env.REACT_APP_ASTRONOMY_LIMIT || 15;

const HomePage = () => {
	const fetchAstronomy = ({ pageParam = TODAY }) => {
		const startDate = new Date();
		startDate.setDate(pageParam.getDate() - MAX_LIMIT);
		return getManyAstronomy(startDate, pageParam);
	};

	const { data, isFetching } = useInfiniteQuery('astronomy', fetchAstronomy, {
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
	});

	if (isFetching) return <div>loading</div>;
	return (
		<Main>
			<AstronomyList items={data.pages.flat().reverse()} />
		</Main>
	);
};

export default HomePage;
