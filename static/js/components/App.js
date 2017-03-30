import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

class App extends React.Component {
	render() {
		return (
			<div className="master">
		      <Sidebar />
		      <Content active={this.props.active} />
		    </div>
		)
	}
}
export default App