import { Component } from "react";

class GoTopButton extends Component {
	goTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
	checkVisibility() {
		const goTopButton = document.getElementById("go-top-button");
		goTopButton.style.display = window.scrollY > window.innerHeight * 0.2 ? "block" : "none";
	}
	componentDidMount() {
		window.addEventListener("scroll", this.checkVisibility);
		this.checkVisibility();
	}
	render() {
		return (<>
			<button id="go-top-button" onClick={this.goTop}>
				<span>⬆</span>
			</button>
		</>);
	}
}

export default GoTopButton;
