import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ image, name, projectURL, gitHub }) => {
	return (
		<div
			style={{ backgroundImage: `url(${image})` }}
			className="rounded-md container items-center justify-center  mx-auto shadow-lg shadow-[#050c16] group"
		>
			{/* ON HOVER  DIV TO APPEAR*/}
			<div className="group-hover:opacity-100 opacity-0 content hover:duration-300 flex flex-col justify-center items-center rounded-lg">
				<span className="font-bold font-Inter text-2xl text-white tracking-wider">
					{name}
				</span>
				<div className="pt-8 text-center">
					<a href={projectURL} target="_blank">
						<button className="rounded-lg px-4 py-3 m-2 text-center font-bold text-lg bg-white text-black">
							View Project
						</button>
					</a>
					<a href={gitHub} target="_blank">
						<button className="rounded-lg px-4 py-3 m-2 text-center font-bold text-lg bg-white text-black">
							View Code
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
