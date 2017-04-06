import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components"
import { Link } from 'react-router-dom'

function collectionIndex() {
	let pathArray = window.location.pathname.split( '/' ),
		collectionIndex = pathArray[pathArray.length-1];
	return collectionIndex;
}	
function collectionName() {
	let collectionName = document.querySelector("img").getAttribute("src").split( '/' )[5];
	return collectionName
}

function s3Url(key, thumb) {
	if (thumb) return `https://s3.us-east-2.amazonaws.com/harwoodjp-public/photos${key}`
	if (!thumb) return `https://s3.us-east-2.amazonaws.com/harwoodjp-public/photos${key}`.replace("thumb/","")
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
    		<a href={s3Url(json, false)} target="_blank" key={json}>
    			<Photo src={s3Url(json, true)} key={json} />
    		</a>
	    )
	})
	galleryComponent.setState({photos: photosMapped})
	galleryComponent.setState({collectionName: collectionName()})
}

function randomDegreesOnPhotos(photos) {
	const degrees = [-2, 0, 2, 4, 6, 8, 10];
	let random;
	document.querySelectorAll("img").forEach( (img) => {
		random = degrees[Math.floor(Math.random() * degrees.length)];	
		img.style.transform = `rotate(${random}deg)`;
	})
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
	@media (max-width: 600px) {
		width:70%;
		height:auto
		margin:0 auto;
		margin-bottom:2em;
	}

`;

const CollectionName = styled.h3`
	color:#f4f5f7;
	display:block;
	text-align:center;
	width:100%;
`;

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = { collectionName: "", photos: [] };
	}
	componentDidMount() {
		document.title = "Collections";
		fetchPhotos(this);	
	}
	componentDidUpdate() {
		//randomDegreesOnPhotos(this.state.photos)		
	}
	render() {
		return( 
			<Wrapper>
				<CollectionName>{this.state.collectionName}</CollectionName>			
				{this.state.photos}
			</Wrapper>				    
		)			
	}
}
export default Gallery
