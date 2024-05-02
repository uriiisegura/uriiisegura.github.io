import { Component } from "react";

class GoTopButton extends Component {
	goTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
	checkVisibility() {
		const goTopButton = document.getElementById("go-top-button");
		goTopButton.style.display = window.scrollY > 250 ? "block" : "none";
	}
	componentDidMount() {
		window.addEventListener("scroll", this.checkVisibility);
	}
	render() {
		return (<>
			<button id="go-top-button" onClick={this.goTop}>
				<i className="fas fa-arrow-up">↑</i>
			</button>
		</>);
	}
}

export default GoTopButton;
