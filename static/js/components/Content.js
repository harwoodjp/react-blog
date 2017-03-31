import React from 'react';
import styled from "styled-components"

import Blog from "./Blog"
import Pix from "./Pix"

const Wrapper = styled.div`
	background:#FFA953;
	width:75%;
	height:150%;
	position:relative;
	left:25%;
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