import React from 'react';
import styled from "styled-components"

import Blog from "./Blog"
import Pix from "./Pix"

const Wrapper = styled.div`
	color:#2c2d2d;    
	width:70%;
	position:relative;
	left:30%;
`;

class Content extends React.Component {
	render() {
		if (this.props.active == "blog") {
			return( 
				<Wrapper>
					<Blog />
				</Wrapper>				    
			)			
		}
		if (this.props.active == "pix") {
			return( 
				<Wrapper>
					<Pix />
				</Wrapper>				    
			)			
		}
	}
}
export default Content