import { Component } from "react";
import { Link } from "react-router-dom";

import MakeURL from "../functions/MakeURL";

class ProjectHeader extends Component {
	render() {
		return (<>
			<header className="project-header">
				<div className="header-title-container">
					<img id="header-icon" src={`/${MakeURL(this.props.project)}.svg`} alt={this.props.project} />
					<Link id="header-title" className="unlink" to="/">{this.props.project}</Link>
				</div>
			</header>
		</>);
	}
}

export default ProjectHeader;
