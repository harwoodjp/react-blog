import React from 'react';
import styled from "styled-components"
import Showdown from 'showdown';
import renderHTML from 'react-render-html';

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
	margin:1em;
	padding:2em;
	width:75%;
`;

class Blog extends React.Component {
	render() {
		const converter = new Showdown.Converter();	
		return( 
			<Wrapper>
				<Date> {this.props.date.substr(0,16)} </Date>			
				<Title>{this.props.title}</Title>
				<Body> {renderHTML(converter.makeHtml(this.props.body))} </Body>
			</Wrapper>				    
		)			
	}
}
export default Blog