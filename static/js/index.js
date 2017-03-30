import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom'

import App from "./components/App"

ReactDOM.render(
	<Router history={browserHistory}>
		<div>
        	<Route exact path="/" component={props => <App active="blog"/>}/>
        	<Route path="/pix" component={props => <App active="pix"/>}/>
        </div>
    </Router>,
	document.getElementById("app")
);
