import React, { Component } from "react";
import katex from "katex";

class About extends Component {
	componentDidMount() {
		katex.render(
			"\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}",
			document.getElementById("eq-1"),
			{ throwOnError: false, displayMode: true }
		);
	}
	render() {
		return (<>
			<h1>About</h1>
			<div id="eq-1"></div>
		</>);
	}
}

export default About;
