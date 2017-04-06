import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components"

const Wrapper = styled.div`
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
`;

const ContactForm = styled.form`
    background-color: #363d3f;
    padding:1em;
	margin-top:2em;
	width:60%;
	input, textarea {
		background-color:#f4f5f7;    		
		border:none;		
		display:block;
		font-family: 'Droid Sans Mono', monospace;
		margin-bottom:.5em;
		padding:.5em;
		width:100%;		
	}
	.submit {
		background-color:#277276;
		color:#f4f5f7;    	
		cursor:pointer;	
	}
	textarea {
		min-height:15em;
	}
	@media (max-width: 600px) {
		width:80%;
	}

`;

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = { };
	}
	componentDidMount() {
		document.title = "Contact";
	}
	componentDidUpdate() {
	}
	render() {
		return( 
			<Wrapper>
				<ContactForm action="https://formspree.io/harwoodjp@g.cofc.edu" method="POST">
				    <input type="text" name="name" placeholder="John Doe" />
				    <input type="email" name="_replyto" placeholder="john@doe.com" />
				    <textarea name="body" placeholder="I'd like to inquire about..."></textarea>
				    <input className="submit" type="submit" value="Send" />
				</ContactForm>
			</Wrapper>				    
		)			
	}
}
export default Contact
