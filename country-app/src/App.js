import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Spinner from "./components/Spinner";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	// Fetch data function
	const getData = async () => {
		try {
			const res = await axios.get(`https://restcountries.com/v3.1/all`);
			setData(res.data);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		setIsLoading(true);
		getData();
	}, []);

	return (
		<Router>
			{isLoading ? (
				<Spinner />
			) : (
				<>
					<Navbar />
					<Routes>
						<Route exact path="/" element={<Home data={data} />} />
						<Route exact path="/details" element={<Details />} />
					</Routes>
				</>
			)}
		</Router>
	);
}

export default App;
