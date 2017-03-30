import React from 'react';
import styled from "styled-components"

const Wrapper = styled.div`
	background:#FFA953;
	width:75%;
	height:150%;
	position:relative;
	left:25%;
`;

class Content extends React.Component {
	render() {
		return( 
			<Wrapper>
				Content
			</Wrapper>				    
		)			
	}
}
export default Content