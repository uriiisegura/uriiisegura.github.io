import React, { Component } from "react";
import katex from "katex";

class Home extends Component {
	componentDidMount() {
		katex.render(
			"\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}",
			document.getElementById("eq-1"),
			{ throwOnError: false, displayMode: true }
		);
	}
	render() {
		return (
			<section>
				<h1>@uriiisegura</h1>
				<div id="eq-1"></div>
			</section>
		);
	}
}

export default Home;
