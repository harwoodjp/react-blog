import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components"
import { Link } from 'react-router-dom'

function collectionIndex() {
	let pathArray = window.location.pathname.split( '/' ),
		collectionIndex = pathArray[pathArray.length-1];
	return collectionIndex;
}		
function s3Url(key) {
	return `https://s3.us-east-2.amazonaws.com/harwoodjp-public/photos${key}`
}
function fetchPhotos(galleryComponent) {
	let f = fetch(`https://harwoodjp.com/api/collections/${collectionIndex()}`, { method: 'get' })
		.then(function(response) {
			if (response.status === 200) {
				return response.text();
			} else { return response.status }
		});
	f.then((response)=> {
		mapCollections(response, galleryComponent);
	} )
};

function mapCollections(json, galleryComponent) {
	json = JSON.parse(json);
	let photosMapped = json.map(function(json) {
	    return(
    		<Photo src={s3Url(json)} key={json} />
	    )
	})
	galleryComponent.setState({photos: photosMapped})
}

const Wrapper = styled.div`
	display:flex;
	flex-wrap:wrap;
	justify-content:center;

`;

const Photo = styled.img`
	align-items:center;
	background-color:#f4f5f7;
	box-shadow:2px 2px 5px #4D4D4D;
	display:flex;
	flex-direction:column;
	height:10em;	
	padding:.25em;
	justify-content:center;
	margin:1em;
`;

function randomDegreesOnPhotos(photos) {
	const degrees = [-2, 0, 2, 4, 6, 8, 10];
	let random;
	document.querySelectorAll("img").forEach( (img) => {
		random = degrees[Math.floor(Math.random() * degrees.length)];	
		img.style.transform = `rotate(${random}deg)`;
	})
}

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = { title: "", photos: [] };
	}
	componentDidMount() {
		document.title = "Collections";
		fetchPhotos(this);	
	}
	componentDidUpdate() {
		randomDegreesOnPhotos(this.state.photos)		
	}
	render() {
		return( 
			<Wrapper>
				{this.state.photos}
			</Wrapper>				    
		)			
	}
}
export default Gallery
