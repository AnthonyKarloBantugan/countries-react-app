import { useState, useEffect } from "react";
import ThumbDetails from "../components/ThumbDetails";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = ({ data }) => {
	const [countries, setCountries] = useState([]);

	// Search Function
	const searchCountry = async (name) => {
		try {
			// set input to minimum of 3 characters to start search
			if (name.length < 3 || name === "") return;

			const res = await axios.get(
				`https://restcountries.com/v3.1/name/${name}`
			);
			setCountries(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	// Filter Function
	const filterByRegion = async (region) => {
		try {
			if (region === "") return;
			if (region === "all") {
				const res = await axios.get(
					`https://restcountries.com/v3.1/all`
				);
				setCountries(res.data);
			}
			const res = await axios.get(
				`https://restcountries.com/v3.1/region/${region}`
			);
			setCountries(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		setCountries(data);
	}, [data]);

	return (
		<div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
			<div className="flex flex-col justify-center items-center  md:justify-between md:flex-row mb-6 md:mb-16 mx-auto">
				<div className="relative md:w-1/2 md:ml-4">
					<FaSearch
						className="absolute top-[30%] left-3 text-gray-400"
						size={20}
					/>
					<input
						type="search"
						placeholder="Search country..."
						className="pl-10 p-2 shadow-md rounded-md dark:bg-gray-700 outline-none w-full "
						onChange={(e) => searchCountry(e.target.value)}
					/>
				</div>

				<select
					className="p-2 shadow-md rounded-md font-medium dark:bg-gray-700 outline-none md:mr-6 hidden md:block"
					onChange={(val) => filterByRegion(val.target.value)}
					defaultValue=""
				>
					<option value="" hidden>
						Filter by Region
					</option>
					<option value="all">All</option>
					<option value="africa">Africa</option>
					<option value="america">Americas</option>
					<option value="asia">Asia</option>
					<option value="europe">Europe</option>
					<option value="oceania">Oceania</option>
				</select>
			</div>
			<div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 mx-auto px-4 ">
				{countries.map((country, i) => (
					<Link to="/details" state={country} key={i}>
						<ThumbDetails
							code={country.cca3}
							img={country.flags}
							timezones={country.timezones}
							idd={country.idd}
							name={country.name}
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Home;
