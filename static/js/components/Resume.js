import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components"
import Showdown from 'showdown';
import renderHTML from 'react-render-html';

function fetchResume(resumeComponent) {
	let f = fetch("/static/assets/Resume.md", { method: 'get' })
		.then(function(response) {
			if (response.status === 200) {
				return response.text();
			} else { return response.status }
		});
	f.then((response)=> {
		resumeComponent.setState({resume: response});
	} )
};

function renderMarkdown(resume) {

}

const Wrapper = styled.div`
    background-color: #f4f5f7;
	margin:0 auto;  
	margin-bottom:1em;
	padding:1em;
	position:relative;
	top:1em;
	width:75%;
	h1, h2 {
		margin-bottom:.25em;
	}

`;

const ResumeBody = styled.div`
	margin:0 auto;    
	width:90%;
	h1, h2 {
		margin-bottom:0;
	}
	li {
		line-height:1.5;
	}
	@media (max-width: 900px) {
		font-size:.9em;		
		li {
			position:relative;
			left:-1em;
		}
		mobile {
			display:none;
		}
	}

`;

class Resume extends React.Component {
	constructor(props) {
		super(props);
		this.state = { resume: "" };
	}
	componentDidMount() {
		document.title = "Resume";
		fetchResume(this);
	}
	componentDidUpdate() {
	}
	render() {
		const converter = new Showdown.Converter();	
		return( 
			<Wrapper>
				<ResumeBody>{renderHTML(converter.makeHtml(this.state.resume))}</ResumeBody>
			</Wrapper>				    
		)			
	}
}
export default Resume
