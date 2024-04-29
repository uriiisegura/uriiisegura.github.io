import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./css/normalize.css";
import "./css/style.css";

import Home from "./pages/Home";

function App() {
	return (<>
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	</>);
}

export default App;
