import React from 'react';
import styled from "styled-components"
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Wrapper = styled.div`
	background:#E99E9E;
	width:25%;
	height:100%;
	position:fixed;
`;

class Sidebar extends React.Component {
	render() {
		return( 		    
			<Wrapper>
				<Link to="/">Home</Link>
				<Link to="/pix">Pix</Link>
			</Wrapper>
		)
	}
}
export default Sidebar