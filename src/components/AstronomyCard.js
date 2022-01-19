import React, { useState } from 'react';
import styled from 'styled-components';
import { setLike as setLikeAPI, removeLike } from '../api/AstronomyAPI';
import Description from './Description';
import LikeButton from './LikeButton';

const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

const AstronomyCard = ({ value = {}, liked = false }) => {
	const [like, setLike] = useState(liked);

	const { url, title, explanation, date, media_type, thumbnail_url } = value;

	const imageURL = media_type === 'video' ? thumbnail_url : url;
	const dateObject = new window.Date(date);
	const dateString = dateObject.toLocaleDateString('en-US', dateOptions);

	const handleLike = () => {
		if (!like) {
			setLikeAPI(date);
		} else {
			removeLike(date);
		}
		setLike(!like);
	};

	return (
		<Container>
			<Header>
				<Title>{title}</Title>
			</Header>
			<ImageContainer>
				<Image src={imageURL} alt='astronomy' />
			</ImageContainer>
			<Info>
				<ButtonsContainer>
					<LikeButton active={like} onClick={handleLike} />
				</ButtonsContainer>
				<DescriptionContainer>
					<Description text={explanation} />
				</DescriptionContainer>
				<Date>{dateString}</Date>
			</Info>
		</Container>
	);
};

const Container = styled.div`
	overflow: hidden;
	max-width: 38rem;
	margin: 0 auto;

	border: 1px solid var(--color-gray-300);
	border-radius: var(--rounded-2xl);
	box-shadow: var(--shadow-md);
`;
const Header = styled.div`
	padding: 1rem;
`;
const ImageContainer = styled.div`
	overflow: hidden;
`;
const Image = styled.img`
	width: 100%;
	object-fit: cover;
`;
const Info = styled.div`
	padding: 1rem;
`;
const ButtonsContainer = styled.div``;
const Title = styled.h3`
	font-size: var(--text-lg);
	font-weight: var(--font-bold);
`;
const DescriptionContainer = styled.div`
	padding: 0.5rem 0;
`;
const Date = styled.p`
	color: var(--color-gray-500);
	font-size: var(--text-sm);
`;

export default AstronomyCard;
