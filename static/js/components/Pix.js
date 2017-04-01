import React from 'react';
import styled from "styled-components"

const Wrapper = styled.div`
	height:150%;
`;

class Pix extends React.Component {
	componentDidMount() {
		document.title = "Pix";
	}
	render() {
		return( 
			<Wrapper>
				im a pix
			</Wrapper>				    
		)			
	}
}
export default Pix