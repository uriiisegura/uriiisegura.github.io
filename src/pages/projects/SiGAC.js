import { Component } from "react";

class SiGAC extends Component {
	render() {
		return (<>
			<section className="sigac">
				<h1>Sistema de Gestió de l'Arxiu Casteller</h1>

				<p>
					Des de sempre he estat obsessionat en l'ordre i la classificació de les coses. Tenir un registre, un arxiu de tot allò que passa, que es té; de tot allò que s'ha de gestionar.
				</p>

				<p>
					El món casteller, en aquest sentit, és extremadament ineficient. No hi ha res semblant a un arxiu, el més semblant probablement sigui la <a href="https://castellscat.cat/ca/base-de-dades" target="_blank" rel="noreferrer">base de dades</a> de la Coordinadora de Colles Castelleres de Catalunya, que està molt lluny de ser un bon model. I això és un problema.
				</p>

				<p>
					Vaig començar a fer castells el novembre de 2018, als Castellers de Sants. Ràpidament em vaig interessar molt per la història dels castells, per la seva evolució, pel seu registre i arxiu històric. No em va costar gaire veure que el món casteller estava suspès en aquesta assignatura.
				</p>

				<p>
					És per tot aquests motius que el febrer de 2024 vaig començar a pensar en com podria ser un sistema de gestió de l'arxiu casteller. Un sistema que permetés registrar tots els castells fets, amb tota la informació possible, i que permetés fer-ne un seguiment, una anàlisi, una visualització.
				</p>

				<h2>L'ontologia del model</h2>

				<p>
					La clau per a fer un bon axiu és el model. Cal que sigui excel·lent, escalable, fàcil d'usar i el màxim eficient. Cal que estigui preparat per a nous castells, noves estructures i noves idees. Cal un sistema viu, que pugui créixer i adaptar-se.
				</p>

				<p>
					És per això que des d'un inici va esdevenir el centre d'atenció del projecte. Quan li vaig proposar a l'Arnau d'ajudar-me jo ja tenia una idea de com havia de ser aquest model; com calia esperar, aquesta primera versió era molt millorable i va canviar molt amb el temps.
				</p>

				<p>
					Vam estar tot l'abril i maig de 2024 treballant en aquest model, en aquesta ontologia. Vam fer diverses reunions, molts esborranys, i moltes proves. I finalment, a finals de juny, vam arribar a un model que ens va semblar prou bo per a començar a treballar-hi.
				</p>

				<hr />

				<h2>L'equip</h2>

				<p>
					Desenvolupament i disseny:
				</p>

				<ul>
					<li>Oriol Segura i Niño – <a href="https://twitter.com/uriiisegura" className="uncolor" target="_blank" rel="noreferrer">Twitter</a></li>
					<li>Arnau Domènech i Bravin</li>
				</ul>

				<p>
					Agraïments:
				</p>

				<ul>
					<li>Laia Casas i Irure</li>
				</ul>
			</section>
		</>);
	}
}

export default SiGAC;
