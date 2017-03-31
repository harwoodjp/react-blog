import React from 'react';
import styled from "styled-components"

const Wrapper = styled.div`
	background:#FFA953;
	width:75%;
	height:150%;
	position:relative;
	left:25%;
`;

class Blog extends React.Component {
	componentDidMount() {
		document.title = "Blog";
	}

	render() {
		return( 
			<Wrapper>
				im a blog
			</Wrapper>				    
		)			
	}
}
export default Blog