import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

const MAX_WORDS = 20;
const getShortText = (text) => {
	const shortText = text.slice(0, MAX_WORDS);
	shortText[MAX_WORDS - 1] = shortText[MAX_WORDS - 1] + '...';
	return shortText.join(' ');
};

const Description = ({ text = '' }) => {
	const [active, setActive] = useState(false);

	const textArray = text.split(' ');
	const tooLong = textArray.length > MAX_WORDS;
	const shortText = tooLong && getShortText(textArray);

	const handleActivate = () => {
		setActive(true);
	};

	return (
		<div>
			{!active && tooLong ? (
				<Fragment>
					<span>{shortText}</span>
					<Button onClick={handleActivate}>more</Button>
				</Fragment>
			) : (
				<span>{text}</span>
			)}
		</div>
	);
};

const Button = styled.button`
	background-color: transparent;
	color: var(--color-gray-500);

	:hover {
		cursor: pointer;
	}
`;

export default Description;
