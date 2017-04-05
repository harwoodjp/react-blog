import React from 'react';
import styled from "styled-components"
import { Link } from 'react-router-dom'

import Collection from './Collection'

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
	let index = -1;
	let collectionsMapped = json.map(function(json) {
		index++;
	    return <StyledLink to={`/collections/${index}`} key={index}><Collection name={json} key={index} index={index} /></StyledLink>
	})
	pixComponent.setState({collections: collectionsMapped})
}

const Wrapper = styled.div`
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
	
`;
const StyledLink = styled(Link)`
	color:#2c2d2d;
	text-decoration:none;
`;

class Collections extends React.Component {
	constructor(props) {
		super(props);
		this.state = { collections: [] };
	}
	componentDidMount() {
		document.title = "Collections";
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
export default Collections