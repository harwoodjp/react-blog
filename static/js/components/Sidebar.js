import React from 'react';
import styled from "styled-components"
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom'

const AvatarWrapper = styled.div`
	border-radius:50%;
	overflow:hidden;
	height:10vw;
	width:10vw;
	margin-top:2em;
	@media (max-width: 900px) {
		margin-left:1em;
		margin-top:0;
		height:4em;
		width:4em;
	}

`;
const BioMessage = styled.span`
	color:#f4f5f7;    
	display:block;
`;
const Avatar=styled.img`
	height:100%;
	position:relative;
	left:-14px;
	transform:scale(1)

`;
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
		font-size:2em;
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
		flex-direction:row;
		height:10%;
		justify-content:space-between;
		overflow:scroll;		
		width:100%;
  	}
`;

class Sidebar extends React.Component {
	render() {
		return( 		    
			<Wrapper>
				<Link to="/">
					<AvatarWrapper>
						<Avatar src="/static/assets/pic2.jpg" />
					</AvatarWrapper>
				</Link>
				<LinkSet>
					<StyledLink to="/">Blog</StyledLink>
					<StyledLink to="/collections">Pictures</StyledLink>
					<StyledLink to="/resume">Resume</StyledLink>
					<StyledLink to="/contact">Contact</StyledLink>
				</LinkSet>

			</Wrapper>
		)
	}
}
export default Sidebar