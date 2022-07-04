import { ImSpinner } from "react-icons/im";

const Spinner = () => {
	return (
		<div>
			<div className="h-screen flex flex-col justify-center items-center">
				<ImSpinner className="animate-spin h-12 w-12 mb-2" />
				<span className="text-xl tracking-wide">Loading...</span>
			</div>
		</div>
	);
};

export default Spinner;
