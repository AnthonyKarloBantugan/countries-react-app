import React from "react";

const ThumbDetails = ({ name, code, img, timezones, idd }) => {
	return (
		<div className="container rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white overflow-hidden">
			<img
				src={img.svg}
				alt={name}
				className="min-h-[150px] w-full rounded-tl-lg rounded-tr-lg p-1"
			/>
			<div className="p-4">
				<h3 className="font-bold mb-4">{name.common}</h3>
				<p className="text-xs">
					Country Code:
					<span className="text-gray-700 dark:text-gray-300 ml-1">
						{code}
					</span>
				</p>
				<p className="text-xs">
					Timezones:
					<span className="text-gray-700 dark:text-gray-300 ml-1">
						{timezones}
					</span>
				</p>
				<p className="text-xs">
					Calling Code:
					<span className="text-gray-700 dark:text-gray-300 ml-1">
						{idd.root}
						{idd.suffixes}
					</span>
				</p>
			</div>
		</div>
	);
};

export default ThumbDetails;
