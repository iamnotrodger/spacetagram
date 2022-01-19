import React from 'react';
import styled from 'styled-components';
import { isLiked } from '../api/AstronomyAPI';
import breakpoints from '../utils/breakpoints';
import AstronomyCard from './AstronomyCard';

const AstronomyList = ({ items = [] }) => {
	return (
		<Container>
			{items.map((astronomy, i) => (
				<AstronomyCard
					key={i}
					value={astronomy}
					liked={isLiked(astronomy.date)}
				/>
			))}
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media ${breakpoints.md} {
		gap: 2rem;
	}
`;

export default AstronomyList;
