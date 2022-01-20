import styled from 'styled-components';
import breakpoints from '../utils/breakpoints';

export default styled.main`
	background-color: rgba(var(--b3f, 250, 250, 250), 1);
	padding: 0.5rem;

	@media ${breakpoints.md} {
		padding: 2rem;
	}
`;
