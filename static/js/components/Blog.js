import React from 'react';
import styled from "styled-components"

import Post from './Post'

const Wrapper = styled.div`
	align-items:center;
	display:flex;
	flex-direction:column;
`;

class Blog extends React.Component {
	componentDidMount() {
		document.title = "Blog";
	}

	render() {
		return( 
			<Wrapper>
				<Post />
				<Post />
				<Post />
			</Wrapper>				    
		)			
	}
}
export default Blog