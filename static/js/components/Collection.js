import React from 'react';
import styled from "styled-components"

const Wrapper = styled.div`
	align-items:center;
	background-color:#f4f5f7;
	display:flex;
	flex-direction:column;
	width:10em;
	height:8em;	
	padding:2em;
	justify-content:center;
	margin:1em;
`;
const Date = styled.div`
	color:#606266
	display:inline;
	margin:0;

`;
const Text = styled.h3`
	text-align:center;
`;

class Collection extends React.Component {
	componentDidMount() {
		document.title = "Pix";
	}
	render() {
		return( 
			<Wrapper>
				<Date>{this.props.name.substr(0,8)}</Date>
				<Text>{this.props.name.substr(9,this.props.name.length)}</Text>
			</Wrapper>				    
		)			
	}
}
export default Collection