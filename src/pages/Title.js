import React, { Component } from "react";
import TitleButton from "../components/TitleButton";

const ZOOM = 0.55;
const NUMBER_OF_SIDES = 8;
const NUMBER_OF_FIGURES = 121;
const BASE_THICKNESS = 0.015;

const TITLE_SCROLL_AMOUNT = 0.5;

class Title extends Component {
	componentDidMount() {
		const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		const titleContent = document.getElementById("title-content");

		svg.setAttribute("viewBox", -ZOOM + ' ' + -ZOOM + ' ' + 2 * ZOOM + ' ' + 2 * ZOOM);

		document.getElementById("svg-container").appendChild(svg);

		const SHRINK_RATIO = -Math.cos(4 * Math.PI / NUMBER_OF_SIDES);

		const paths = [];
		for (let i = 0; i < NUMBER_OF_FIGURES; i++) {
			const path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
			path.setAttribute('stroke-width', BASE_THICKNESS * (SHRINK_RATIO ** i));
			path.setAttribute('fill', 'none');
			path.setAttribute('stroke-linejoin', 'round');

			paths.push(path);

			svg.appendChild(path);
		}

		function setFiguresByAngle(angle) {
			const shrinkFactor = Math.cos(Math.PI / NUMBER_OF_SIDES) / Math.cos(angle - Math.PI / NUMBER_OF_SIDES);
			let currentRadius = 1;
			let currentAngle = 0;
			for (let i = 1; i < NUMBER_OF_FIGURES; i++) {
				currentRadius *= shrinkFactor;
				currentAngle += angle;

				const path = paths[i];
				let pathString = '';
				for (let j = 0; j < NUMBER_OF_SIDES; j++) {
					pathString += (j === 0) ? 'M' : 'L';
					pathString += (currentRadius * Math.sin(currentAngle + j * 2 * Math.PI / NUMBER_OF_SIDES)) + ' ' + (currentRadius * Math.cos(currentAngle + j * 2 * Math.PI / NUMBER_OF_SIDES));
				}
				pathString += 'z';

				path.setAttribute('d', pathString);
				path.setAttribute('stroke-width', BASE_THICKNESS * currentRadius);
			}
		}

		function transformTime(t) {
			t = Math.min(1, t);
			return 1 - (1 - t) ** 3;
		}

		function loop() {
			let t = (performance.now() - startTime) / 1000 / 3;

			setFiguresByAngle(transformTime(t) * 2 * Math.PI / NUMBER_OF_SIDES / 4);

			if (t < 1)
				window.requestAnimationFrame(loop);
		}

		const startTime = performance.now();
		loop();

		function scrollCallback() {
			if (window.scrollY < window.innerHeight) {
				titleContent.style.transform = `translateY(${window.scrollY * TITLE_SCROLL_AMOUNT / 2}px)`;
				svg.style.transform = `translateY(${window.scrollY * (1 - TITLE_SCROLL_AMOUNT) / 2}px)`;
			}
		}

		window.addEventListener('scroll', scrollCallback);
		scrollCallback();
	}
	render() {
		return (<>
			<div id="title-content">
				<div id="svg-container">
				</div>
				<div className="center-vertical">
					<div className="title-oriol">Oriol</div>
					<div className="title-segura">Segura</div>
					<div className="title-nino">Niño</div>
					<div className="short-screen-title">Oriol Segura Niño</div>
					<div className="buttons">
						<TitleButton to="/sigac" text="SiGAC" />
						{/* <TitleButton to="/projects" text="Projects" /> */}
						<TitleButton to="#about" hash={true} text="About" />
					</div>
				</div>
			</div>
		</>);
	}
}

export default Title;
