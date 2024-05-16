import { Component } from "react";
import { Link } from "react-router-dom";

const ANIMATE_TIME_MS = 333;

class Navbar extends Component {
	componentDidMount() {
		const parent = document.getElementById("header-title");
		const svg = document.getElementById("header-title-underline");
		const pathAndTimes = [];

		let width = 0;
		let mouseIsOver = false;

		function cubicOut(x) {
			return 1 - (1 - x)**3;
		}

		function loop() {
			const t = performance.now() / ANIMATE_TIME_MS;
			
			for (let i = 0; i < pathAndTimes.length; i++) {
				const [path, startTime, stopTime] = pathAndTimes[i];
				
				if (t > stopTime + 1) {
					pathAndTimes.shift();
					i--;
					svg.removeChild(path);
					continue;
				}
				
				const pathStart = cubicOut(Math.min(t - startTime, 1));
				const pathStop = cubicOut(Math.max(t - stopTime, 0));
				path.setAttribute("d", `M${pathStop * width} 0L${pathStart * width} 0`);
			}
			
			requestAnimationFrame(loop);
		}

		const mouseEnterCallback = () => {
			if (mouseIsOver) return;
			mouseIsOver = true;
			width = parent.offsetWidth;
			const height = 2;
			svg.setAttribute("width", width);
			svg.setAttribute("height", height);
			svg.setAttribute("viewBox", `0 -0 ${width} ${height}`);

			const newPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
			svg.appendChild(newPath);
			pathAndTimes.push([
				newPath,
				performance.now() / ANIMATE_TIME_MS,
				Infinity
			]);
		};

		const mouseLeaveCallback = () => {
			if (!mouseIsOver) return;
			mouseIsOver = false;
			pathAndTimes[pathAndTimes.length - 1][2] = performance.now() / ANIMATE_TIME_MS;
		};

		parent.addEventListener("mouseenter", mouseEnterCallback);
		parent.addEventListener("touchstart", mouseEnterCallback);

		parent.addEventListener("mouseleave", mouseLeaveCallback);
		parent.addEventListener("touchend", mouseLeaveCallback);

		loop();
	}
	render() {
		return (<>
			<header>
				<div className="header-title-container">
					<img id="header-icon" src="/sigac.svg" alt="Oriol Segura Niño" />
					<Link id="header-title" className="unlink" to="/">
						Oriol Segura Niño
						<svg id="header-title-underline"></svg>
					</Link>
				</div>
				<nav className="header-nav">
					<Link className="header-nav-button unlink" to="/sigac">SiGAC</Link>
					<Link className="header-nav-button unlink" to="/projects">Projects</Link>
				</nav>
			</header>
		</>);
	}
}

export default Navbar;
