import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom'

import App from "./components/App"

ReactDOM.render(
	<Router history={browserHistory}>
		<div>
        	<Route exact path="/" component={props => <App active="blog"/>}/>
        	<Route exact path="/collections" component={props => <App active="collections"/>}/>
        	<Route exact path="/collections/:index" component={props => <App active="gallery"/>}/>
        	<Route exact path="/contact" component={props => <App active="contact"/>}/>
        	<Route exact path="/resume" component={props => <App active="resume"/>}/>
        </div>
    </Router>,
	document.getElementById("app")
);
