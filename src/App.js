import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./css/normalize.css";
import "./css/style.css";

import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/Navbar";
import Title from "./pages/Title";
import Home from "./pages/Home";
import ProjectHeader from "./components/ProjectHeader";
import SiGAC from "./pages/projects/SiGAC";
import Projects from "./pages/Projects";
import NotFound from "./pages/404";

import GoTopButton from "./components/GoTopButton";

function App() {
	return (<>
		<Router>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<><Title /><Home /></>} />
				<Route path="/sigac" element={<ProjectHeader project="SiGAC" />} />
				<Route path="/barometre" element={<ProjectHeader project="Baròmetre" />} />
				<Route path="*" element={<Navbar />} />
			</Routes>
			<main className="main-content">
				<Routes>
					<Route path="/" element={<></>} />
					<Route path="/sigac" element={<SiGAC />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</Router>
		<GoTopButton />
	</>);
}

export default App;
