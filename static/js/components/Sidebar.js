import React from 'react';
import styled from "styled-components"
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom'

const StyledLink = styled(Link)`
	color:#f4f5f7;    
	display:block;
	font-size:5vw;
	text-decoration:none;
	&:hover {
		text-decoration: underline;
	}
`;
const LinkSet = styled.div`
	margin-top:1em;
`;
const Wrapper = styled.div`
	align-items:center;
    background-color: #363d3f;
	display:flex;
	flex-direction:column;
	height:100%;
	position:fixed;
	width:30%;	
	z-index:1;
`;

class Sidebar extends React.Component {
	render() {
		return( 		    
			<Wrapper>
				<LinkSet>
					<StyledLink to="/">Blog</StyledLink>
					<StyledLink to="/pix">Pictures</StyledLink>
				</LinkSet>
			</Wrapper>
		)
	}
}
export default Sidebar