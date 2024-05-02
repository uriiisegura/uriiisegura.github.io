import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./css/normalize.css";
import "./css/style.css";

import Navbar from "./components/Navbar";
import Title from "./pages/Title";
import Home from "./pages/Home";
import SiGAC from "./pages/projects/SiGAC";
import NotFound from "./pages/404";

import GoTopButton from "./components/GoTopButton";

function App() {
	return (<>
		<Router>
			<Routes>
				<Route path="/" element={<><Title /><Home /></>} />
				<Route path="*" element={<Navbar />} />
			</Routes>
			<main className="main-content">
				<Routes>
					<Route path="/" element={<></>} />
					<Route path="/sigac" element={<SiGAC />} />
					
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</Router>
		<GoTopButton />
	</>);
}

export default App;
