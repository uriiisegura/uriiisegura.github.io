import { Component } from "react";
import { Link } from "react-router-dom";

class Projects extends Component {
	render() {
		return (<>
			<h1>Projects</h1>

			<ul>
				<li><Link className="uncolor" to="/projects">Lorem ipsum dolor sit amet</Link> – May 16, 2024</li>
			</ul>
		</>);
	}
}

export default Projects;
