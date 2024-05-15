import { Component } from "react";
import { Link } from "react-router-dom";

class SiGACHeader extends Component {
	render() {
		return (<>
			<header className="sigac-header">
				<div className="header-title-container">
					<img id="header-icon" src="/sigac.svg" alt="SiGAC" />
					<Link id="header-title" className="unlink" to="/">SiGAC</Link>
				</div>
			</header>
		</>);
	}
}

export default SiGACHeader;
