import { Component } from "react";
import { Link } from "react-router-dom";

class HomeButton extends Component {
	goTo() {
		window.scrollBy({ top: parseInt(this.props.vh) * window.innerHeight / 100, behavior: "smooth" });
	}
	render() {
		if (this.props.vh) {
			return (<>
				<div className="unlink" onClick={this.goTo.bind(this)}>
					<div className="button">
						<div className="button-outline"></div>
						{this.props.text}
					</div>
				</div>
			</>);
		}

		return (<>
			<Link to={this.props.to} className="unlink">
				<div className="button">
					<div className="button-outline"></div>
					{this.props.text}
				</div>
			</Link>
		</>);
	}
}

export default HomeButton;
