import { Component } from "react";

class Barometre extends Component {
	render() {
		return (<>
			<section className="barometre">
				<h1>Baròmetre Casteller Universitari</h1>

				<p>
					Consulta'l a <a href="https://barometreuniversitari.cat/" target="_blank" rel="noreferrer">barometreuniversitari.cat</a> i comprova l'estat actual de les colles castelleres universitàries!
				</p>

				<hr />

				<h2>L'equip</h2>

				<p>
					Desenvolupament i disseny:
				</p>

				<ul>
					<li>Oriol Segura i Niño</li>
					<li>Andreu Huguet i Segarra</li>
				</ul>

				<p>
					Agraïments:
				</p>

				<ul>
					<li>Andreu Roig i Salvat</li>
				</ul>
			</section>
		</>);
	}
}

export default Barometre;
