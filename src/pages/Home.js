import React, { Component } from "react";
import katex from "katex";

class Home extends Component {
	componentDidMount() {
		katex.render(
			"\\int_{a}^{b} x^2 dx",
			document.getElementById("eq-1"),
			{ throwOnError: false }
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
