import React from 'react';
import { fakeResponse } from '../Const';
import { Wrapper, ProductContainer, Banner } from './Style';

export default function Grid() {
	const getRandomColor = () => {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	};

	return (
		<div>
			<Banner>Im a Banner</Banner>
			<Wrapper>
				{fakeResponse.map((value, index) => (
					<ProductContainer
						color={getRandomColor()}
						key={value.id}
					>{`${value.title} - ${index}`}</ProductContainer>
				))}
			</Wrapper>
		</div>
	);
}
