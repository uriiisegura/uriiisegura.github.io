import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./css/normalize.css";
import "./css/style.css";

import Navbar from "./components/Navbar";
import Title from "./pages/Title";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
	return (<>
		<Router>
			<Routes>
				<Route path="/" element={<Title />} />
				<Route path="*" element={<Navbar />} />
			</Routes>
			<main id="main-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</main>
		</Router>
	</>);
}

export default App;
