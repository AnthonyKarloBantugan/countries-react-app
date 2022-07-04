import { FaArrowLeft, FaMapMarkedAlt } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
	let { state } = useLocation();
	let navigate = useNavigate();

	return (
		<div className="w-full h-screen bg-gray-100 dark:bg-gray-800 dark:text-white p-3">
			<div className=" flex flex-col justify-center items-center">
				<div>
					<img src={state.flags.svg} alt={state.name} className="" />
				</div>

				<div className="w-full flex flex-col justify-center items-center ">
					<h2 className="font-bold text-2xl my-2">
						{state.name.common}
					</h2>
					<div>
						<p>
							Official Name:{" "}
							<span className="dark:text-gray-400 text-gray-700 text-sm ml-2">
								{state.name.official}
							</span>
						</p>
						<p>
							Area:{" "}
							<span className="dark:text-gray-400 text-gray-700 text-sm ml-2">
								{state.area.toLocaleString()}
							</span>
						</p>
						<p>
							Capital:{" "}
							<span className="dark:text-gray-400 text-gray-700 text-sm ml-2">
								{state.capital}
							</span>
						</p>
						<p>
							Region:{" "}
							<span className="dark:text-gray-400 text-gray-700 text-sm ml-2">
								{state.region}
							</span>
						</p>
						<p>
							Population:{" "}
							<span className="dark:text-gray-400 text-gray-700 text-sm ml-2">
								{state.population.toLocaleString()}
							</span>
						</p>
						<p>
							Timezones:{" "}
							<span className="dark:text-gray-400 text-gray-700 text-sm ml-2">
								{state.timezones}
							</span>
						</p>
						<p>
							Calling Code:
							<span className="dark:text-gray-400 text-gray-700 text-sm ml-2">
								{state.idd.root}
								{state.idd.suffixes[0]}
							</span>
						</p>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-center items-center gap-2 m-4">
					<button className="md:mr-3 px-4 py-2 bg-white text-gray-600 shadow-md rounded-lg dark:bg-gray-700 dark:text-white ">
						<a
							href={`https://www.google.com/maps/place/${state.name.common}`}
							target="_blank"
							rel="noreferrer"
							className="flex justify-center items-center"
						>
							<FaMapMarkedAlt className="mr-2" /> Show on Map
						</a>
					</button>
					<button
						onClick={() => navigate("/")}
						className="px-8 py-2 bg-white text-gray-600 shadow-md rounded-lg dark:bg-gray-700 dark:text-white flex justify-center items-center"
					>
						<FaArrowLeft className="mr-2" /> Back
					</button>
				</div>
			</div>
		</div>
	);
};

export default Details;
