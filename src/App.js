import React from 'react';
import { Router } from "@reach/router";
import Tsats from './';

import Home from "./components/Home/Home";
import About from "./components/About/About";
import SinglePost from "./components/PostDetails/PostDetails";
import './style.css';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Home path="/"/>
				<About path="/about"/>
				<SinglePost path="/post/:id"/>
			</Router>
		);
	}
}

export default App;
