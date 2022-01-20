import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GithubIcon from '../icons/GithubIcon';

const Navbar = () => {
	return (
		<Nav>
			<Link to='/'>
				<Title>Spacetagram  🚀</Title>
			</Link>
			<IconLink
				href='https://github.com/iamnotrodger/spacetagram'
				target='_blank'
			>
				<GithubIcon width={1.5} height={1.5} />
			</IconLink>
		</Nav>
	);
};

const Nav = styled.nav`
	position: sticky;
	top: 0;
	z-index: 50;
	display: flex;
	align-items: center;
	padding: 1rem;
	background-color: var(--color-light);
	box-shadow: var(--shadow-md);
`;
const Title = styled.h1`
	font-size: var(--text-xl);
`;
const IconLink = styled.a`
	margin-left: auto;
	transition: var(--transition);

	:hover {
		cursor: pointer;
		transform: scale(1.1);
	}
`;

export default Navbar;
