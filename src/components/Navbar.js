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
					<svg id="header-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-1 -1 2 2">
						{/* TODO: icon */}
						{/* <g transform="scale(0.9)" stroke-width="0.1" stroke="#fff" fill="none">
							<polygon id="pentagon" points="0,-1 0.951056516295,-0.309016994375 0.587785252292,0.809016994375 -0.587785252292,0.809016994375, -0.951056516295,-0.309016994375" stroke-linejoin="round"></polygon>
							<use xlinkHref="#pentagon" stroke-width="0.13"></use>
							<g id="recursion1">
								<use xlinkHref="#pentagon" transform="rotate(-18) scale(0.850650808352)"></use>
								<use xlinkHref="#pentagon" transform="rotate(-36) scale(0.72360679775)"></use>
							</g>
							<g id="recursion2">
								<use xlinkHref="#recursion1" transform="rotate(-36) scale(0.72360679775)"></use>
								<use xlinkHref="#recursion1" transform="rotate(-72) scale(0.52360679775)"></use>
							</g>
							<g id="recursion3">
								<use xlinkHref="#recursion2" transform="rotate(-72) scale(0.52360679775)"></use>
								<use xlinkHref="#recursion2" transform="rotate(-144) scale(0.27416407865)"></use>
							</g>
							<g id="recursion4">
								<use xlinkHref="#recursion3" transform="rotate(-144) scale(0.27416407865)"></use>
								<use xlinkHref="#recursion3" transform="rotate(-288) scale(0.075165942022)"></use>
							</g>
						</g> */}
					</svg>
					<Link id="header-title" className="unlink" to="/">
						uriiisegura
						<svg id="header-title-underline" stroke="white" stroke-width="10" viewBox="0 0 124 2"></svg>
					</Link>
				</div>
				<nav className="header-nav">
					<Link className="header-nav-button unlink" to="/projects">Projects</Link>
					<Link className="header-nav-button unlink" to="/projects">Projects</Link>
				</nav>
			</header>
		</>);
	}
}

export default Navbar;
