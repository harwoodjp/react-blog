import React from 'react';
import styled from "styled-components"

import Post from './Post'

const Wrapper = styled.div`
	align-items:center;
	display:flex;
	flex-direction:column;
`;


function fetchPosts(blogComponent) {
	let f = fetch('https://harwoodjp.com/api/blog', { method: 'get' })
		.then(function(response) {
			if (response.status === 200) {
				return response.text();
			} else { return response.status }
		});
	f.then((response)=> {
		mapPosts(response, blogComponent);
	} )
};

function mapPosts(json, blogComponent) {
	json = JSON.parse(json);
	console.log(json);
	let postsMapped = json.map(function(json) {
	    return <Post date={json[4]} title={json[2]} body={json[5]} key={json[0]} />
	})
	blogComponent.setState({posts: postsMapped})
}

class Blog extends React.Component {
	constructor(props) {
		super(props);
		this.state = { posts: [] };
	}
	componentDidMount() {
		document.title = "Blog";
		fetchPosts(this);	
		console.log(this);
	}
	render() {
		return( 
			<Wrapper>
			    {this.state.posts}
			</Wrapper>				    
		)			
	}
}
export default Blog