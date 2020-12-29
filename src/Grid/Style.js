import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	@media (max-width: 800px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
	}
`;

export const ProductContainer = styled.div`
	height: 360px;
	width: 100%;
	background-color: ${(props) => (props.color ? props.color : '#fffff0')};
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Banner = styled.div`
	height: 400px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: red;
`;
