import React from 'react';
import styled from "styled-components"

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
				Sidebar
			</Wrapper>
		)
	}
}
export default Sidebar