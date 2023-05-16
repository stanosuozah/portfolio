import React from "react";

const SkillsCard = ({ image, skill }) => {
	return (
		<div className="flex justify-center flex-col gap-2 cursor-pointer  px-4 py-6 shadow-md shadow-[#050c16] hover:scale-110 duration-500 w-full items-center">
			<img src={image} className="w-20" alt="" />
			<p className="">{skill}</p>
		</div>
	);
};

export default SkillsCard;
