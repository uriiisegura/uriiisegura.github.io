import { Component } from "react";
import { Link } from "react-router-dom";

class HomeButton extends Component {
	render() {
		if (this.props.hash) {
			return (<>
				<a href={this.props.to} className="unlink">
					<div className="button">
						<div className="button-outline"></div>
						{this.props.text}
					</div>
				</a>
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
