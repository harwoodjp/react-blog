import React from 'react';
import styled from "styled-components"

const Body = styled.div`
	line-height:1.5;
`;
const Date = styled.h3`
	align-self:flex-end;
	color:#606266
	display:inline;
	margin:0;
`;
const Title = styled.h1`
`;
const Wrapper = styled.div`
    background-color: #f4f5f7;
    display:flex;
    flex-direction:column;
	height:20em;
	margin:1em;
	padding:2em;
	width:75%;
`;

class Blog extends React.Component {
	render() {
		return( 
			<Wrapper>
				<Date>March 20th, 2017</Date>			
				<Title>React: Updating Parent State</Title>
				<Body>
					One-way data flow is achieved by storing state only (or mostly) in the top-level component of a React interface. State "trickles down" from parent to children, often passed as props.

					State can be passed up the chain, from child to parent, by calling bound functions. These bound functions, scoped to the parent, can be called by the child to mutate the parent state.

					Here's a simplistic example of a child component initiating a state change in its parent.

				</Body>
			</Wrapper>				    
		)			
	}
}
export default Blog