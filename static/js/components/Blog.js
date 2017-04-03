import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components"

import Post from './Post'

const Wrapper = styled.div`
	align-items:center;
	display:flex;
	flex-direction:column;
`;
const ArchiveBtn = styled.button`
	border:none;
	background-color: #363d3f;	
	color:#f4f5f7;    
	cursor:pointer;
	margin:1em;
	padding:1em;
`;


function fetchPosts(blogComponent, limit) {
	let endpointUrl;
	limit===1 ? endpointUrl='http://localhost:5000/api/blog' : endpointUrl='http://localhost:5000/api/blog/all'
	let f = fetch(endpointUrl, { method: 'get' })
		.then(function(response) {
			if (response.status === 200) {
				return response.text();
			} else { return response.status }
		});
	f.then((response)=> {
		mapPosts(response, blogComponent, limit);
	} )
};

function mapPosts(json, blogComponent, limit) {
	json = JSON.parse(json);
	let postsMapped = json.map(function(json) {
		limit===1 ? blogComponent.setState({archiveBtn: true}) : blogComponent.setState({archiveBtn: false}) 	
	    return <Post date={json[4]} title={json[2]} body={json[5]} key={json[0]} />
	})
	blogComponent.setState({posts: postsMapped})
}

function loadAllPosts(blogComponent) {
	fetchPosts(blogComponent, 0);	
}

class Blog extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			archiveBtn: false,
			posts: [] 
		};
	}
	componentDidMount() {
		document.title = "Blog";
		fetchPosts(this, 1);	
	}
	render() {
		return( 
			<Wrapper>
			    {this.state.posts}
			    {this.state.archiveBtn ? <ArchiveBtn onClick={() => { loadAllPosts(this) }}>Load All</ArchiveBtn> : ""}
			</Wrapper>				    
		)			
	}
}
export default Blog