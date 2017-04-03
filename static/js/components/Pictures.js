import React from 'react';
import styled from "styled-components"

import Collection from './Collection'

const Wrapper = styled.div`
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
	
`;

function fetchCollections(pixComponent) {
	let f = fetch('https://harwoodjp.com/api/collections', { method: 'get' })
		.then(function(response) {
			if (response.status === 200) {
				return response.text();
			} else { return response.status }
		});
	f.then((response)=> {
		mapCollections(response, pixComponent);
	} )
};

function mapCollections(json, pixComponent) {
	json = JSON.parse(json);
	let collectionsMapped = json.map(function(json) {
	    return <Collection name={json} key={json} />
	})
	pixComponent.setState({collections: collectionsMapped})
}


class Pictures extends React.Component {
	constructor(props) {
		super(props);
		this.state = { collections: [] };
	}
	componentDidMount() {
		document.title = "Pix";
		fetchCollections(this);	
	}
	render() {
		return( 
			<Wrapper>
				{this.state.collections}
			</Wrapper>				    
		)			
	}
}
export default Pictures