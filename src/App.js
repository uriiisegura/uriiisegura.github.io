import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./css/normalize.css";
import "./css/style.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
	return (<>
		<Router>
			<Navbar />
			<main className="main-content">
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</main>
		</Router>
	</>);
}

export default App;
