import React from 'react';
import styled from "styled-components"

import Blog from "./Blog"
import Gallery from "./Gallery"
import Collections from "./Collections"

const Wrapper = styled.div`
	color:#2c2d2d;    
	width:70%;
	position:relative;
	left:30%;
	@media (max-width: 900px) {
		left:0;
		position:relative;		
		top:5em;
		width:100%;
	}	
`;

const pageDict = {
	blog: <Blog />,
	gallery: <Gallery />,
	collections: <Collections />,
}

class Content extends React.Component {
	render() {
			return( 
				<Wrapper>
					{pageDict[this.props.active]}
				</Wrapper>				    
			)			
	}
}
export default Content