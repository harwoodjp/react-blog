import React from 'react';
import styled from "styled-components"

import Sidebar from './Sidebar';
import Content from './Content';
import Gallery from './Gallery';

const Page = styled.div`
	
`;

class App extends React.Component {
	render() {
		return (
			<Page>
		      <Sidebar />
		      <Content active={this.props.active} />
		    </Page>
		)
	}
}
export default App