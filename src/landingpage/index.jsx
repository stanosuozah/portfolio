import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import NavBar from "../components/NavBar";
import HTML from "../assets/images/html.png";
import CSS from "../assets/images/css.png";
import JAVASCRIPT from "../assets/images/javascript.png";
import REACT from "../assets/images/react.png";
import TAILWIND from "../assets/images/tailwind.png";
import GIT from "../assets/images/github.png";
import SkillsCard from "../components/SkillsCard";
import Unideals from "../assets/images/unideals.png";
import Finebank from "../assets/images/finebank.png";
import Ehya from "../assets/images/ehya.png";
import Bloomway from "../assets/images/bloomway.png";
import UnidealsPartner from "../assets/images/unidealspartner.png";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-scroll";

const LandingPage = () => {
	const handleSubmit = () => {
		axios
			.post(
				"https://getform.io/f/df107ebc-e370-4a98-96b3-c02f5d01f0c5",
				{
					message: "Hello, World",
				},
				{ headers: { Accept: "application/json" } }
			)
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
	};
	return (
		<div className="bg-blue-950 " name="landingpage">
			<NavBar />
			{/* ABOUT SECTION */}
			<div
				name="home"
				className="flex flex-col gap-1 h-auto mt-10 justify-center max-w-[1000px] mx-auto px-6"
			>
				<p className="text-white font-Inter">Hi, I'm </p>
				<h1 className="font-Inter text-4xl sm:text-6xl font-bold text-white">
					Stanley Osuozah.
				</h1>
				<h2 className="font-Inter text-4xl sm:text-7xl font-bold text-white/60">
					I'm a Frontend Developer.
				</h2>
				<p className="font-Inter max-w-[700px] text-white/60 py-4">
					Highly skilled A skilled and dedicated frontend developer with over
					3years of experience in designing and developing user interfaces for
					web applications.
				</p>
				<div>
					<Link to="projects" smooth={true} duration={500}>
						<button className="border-2 font-Inter  group flex gap-2 items-center px-6 py-3 mb-2 hover:bg-black/80 hover:border-black/80 text-white">
							See Projects
							<span>
								<HiArrowNarrowRight className="group-hover:rotate-90 duration-300" />
							</span>
						</button>
					</Link>
				</div>
			</div>

			{/* ABOUT SECTION */}
			<div name="about" className="w-full mt-20 h-auto   bg-blue-950 ">
				<div className="flex flex-col justify-center items-center w-full ">
					<div className="w-full px-2  max-w-[1000px] grid gap-8 grid-cols-2">
						<div className="sm:text-right pb-8 pl-4">
							<p className="font-Inter text-4xl font-bold inline text-white border-b-4 border-white/60">
								About Me
							</p>
						</div>
						<div></div>
					</div>
					<div className="w-full max-w-[1000px] px-6 grid gap-8 sm:grid-cols-2 text-white">
						<div>
							<p className="font-Inter text-4xl font-bold sm:text-right">
								Hi, I'm Stanley Osuozah, nice to meet you.
							</p>
						</div>
						<div>
							<p>
								Highly motivated web developer with a keen focus on front-end
								development, I have a proven track record of successfully
								creating responsive web applications using React, HTML, CSS and
								JavaScript.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* SKILLS */}
			<div name="skills" className="bg-blue-950 mt-20">
				<div className="flex flex-col w-full text-white justify-center px-4 mx-auto max-w-[1000px]">
					<div>
						<p className="text-white text-4xl inline font-Inter font-bold border-b-4 border-white/70">
							Skills
						</p>
						<p className="py-3 font-Inter">Technologies I've worked with</p>
					</div>
					<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
						<SkillsCard image={HTML} skill="HTML" />
						<SkillsCard image={CSS} skill="CSS" />
						<SkillsCard image={JAVASCRIPT} skill="JAVASCRIPT" />
						<SkillsCard image={REACT} skill="REACT" />
						<SkillsCard image={TAILWIND} skill="TAILWIND CSS" />
						<SkillsCard image={GIT} skill="GIT" />
					</div>
				</div>
			</div>

			{/* PROJECTS */}
			<div
				name="projects"
				className="w-full md:h-screen text-white bg-blue950 mt-20"
			>
				<div className="flex flex-col w-full text-white justify-center px-4 mx-auto max-w-[1000px]">
					<div className="pb-6">
						<p className="font-Inter border-b-4 border-white/70 inline text-4xl font-bold">
							Projects
						</p>
						<p className="font-Inter mt-2">Checkout some of my projects</p>
					</div>

					<div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-4">
						<ProjectCard
							name="Finebank Dashboard"
							projectURL="https://fintech-dashboard-kappa.vercel.app/"
							gitHub="https://github.com/stanosuozah/fintech_dashboard"
							image={Finebank}
						/>
						<ProjectCard
							name="Unideals Web App"
							image={Unideals}
							projectURL="https://myunideals.com/"
						/>
						<ProjectCard
							name="Unideals Partner page"
							image={UnidealsPartner}
							projectURL="https://partners.myunideals.com/"
						/>
						<ProjectCard
							name="Ehya Blog App"
							image={Ehya}
							projectURL="https://ehyablog.vercel.app/"
						/>
						<ProjectCard
							name="Bloomway Healthcare"
							image={Bloomway}
							projectURL="https://bloomway.co.uk/"
						/>
					</div>
				</div>
			</div>
			{/* 
			CONTACT SECTION */}
			<div name="contact" className="bg-blue-950 mt-32">
				<div className="flex flex-col w-full text-white justify-center items-center px-4 mx-auto max-w-[1000px]">
					<form
						method="post"
						action="https://getform.io/f/df107ebc-e370-4a98-96b3-c02f5d01f0c5"
						className="font-Inter flex gap-3 flex-col max-w-[600px] w-full"
					>
						<p className="font-Inter border-b-4 border-white/70 text-4xl font-bold">
							Contact
						</p>
						<p className="text-white/90">
							Complete the form below to contact me!
						</p>
						<input
							className="p-2 rounded-md bg-[#ccd6f6]"
							type="text"
							placeholder="Name"
							name="name"
						/>
						<input
							className="p-2 rounded-md bg-[#ccd6f6]"
							type="text"
							placeholder="Email"
							name="email"
						/>
						<textarea
							rows="10"
							name="message"
							placeholder="Message"
							className="p-2 rounded-md bg-[#ccd6f6]"
						></textarea>
						<button className="border-2 hover:bg-black duration-300 border-white mx-auto flex text-white px-4 py-3">
							Let's collaborate now!
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
