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
	@media (max-width: 900px) {
		display:inline;
		padding:.25em;
  	}

`;
const LinkSet = styled.div`
	margin-top:1em;
	@media (max-width: 900px) {
		margin-top:0;
  	}

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
	@media (max-width: 900px) {
		justify-content:flex-end;
		flex-direction:row;
		width:100%;
		height:10%;
  	}

`;

class Sidebar extends React.Component {
	render() {
		return( 		    
			<Wrapper>
				<LinkSet>
					<StyledLink to="/">Blog</StyledLink>
					<StyledLink to="/collections">Pictures</StyledLink>
				</LinkSet>
			</Wrapper>
		)
	}
}
export default Sidebar