import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({
	image,
	name,
	language1,
	language2,
	language3,
	language4,
	webLink,
	gitCode,
}) => {
	return (
		<div className="flex flex-col gap-2" height={150} width={150}>
			<img src={image} className="w-full h-full" />
			<h1 className="text-white font-sans text-xl">{name}</h1>
			<div className="flex justify-rith gap-5 font-sans text-base text-white">
				<p>{language1}</p>
				<p>{language2}</p>
				<p>{language3}</p>
				<p>{language4}</p>
			</div>
			<div className="flex gap-5 font-sans text-white justify-right mt-3">
				<a
					className="text-xl cursor-pointer border-b-4 border-b-lime-600 pb-4"
					href={webLink}
					target="_blank"
				>
					VIEW PROJECT
				</a>
				<a
					className="text-xl cursor-pointer border-b-4 border-b-lime-600 pb-4"
					href={gitCode}
				>
					VIEW CODE
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;
