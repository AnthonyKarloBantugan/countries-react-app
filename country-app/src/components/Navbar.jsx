import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
	const [darkMode, setDarkMode] = useState(true);

	// Dark mode toggler
	const toggleDarkMode = () => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
			setDarkMode((current) => (current = !current));
		}
		if (!darkMode) {
			document.documentElement.classList.remove("dark");
			setDarkMode((current) => (current = !current));
		}
	};
	return (
		<div className="w-full h-16 shadow-md bg-white dark:bg-gray-700 dark:text-white mb-4 px-4">
			<div className="h-full flex justify-between items-center">
				<h1 className="font-bold text-xl">Where to?</h1>
				<div className="font-bold flex justify-center items-center ">
					{darkMode ? <FaMoon /> : <FaSun />}
					<button onClick={() => toggleDarkMode()} className="">
						{darkMode ? "Dark Mode" : "Light Mode"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
