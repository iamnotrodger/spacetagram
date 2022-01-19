import React from 'react';
import styled from 'styled-components';
import LikedIcon from '../icons/LikedIcon';
import LikeIcon from '../icons/LikeIcon';

const LikeButton = ({ active = false, onClick }) => {
	return (
		<Button onClick={onClick}>
			{active ? (
				<LikedIcon
					color='#ed4956'
					fill='#ed4956'
					width='1.5'
					height='1.5'
				/>
			) : (
				<LikeIcon width='1.5' height='1.5' />
			)}
		</Button>
	);
};

const Button = styled.button`
	background-color: transparent;
	transition: var(--transition);

	:hover {
		cursor: pointer;
	}

	:active {
		transform: scale(1.2);
	}
`;

export default LikeButton;
