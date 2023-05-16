import React, { useState } from "react";
import { FaGithub, FaTimes, FaBars, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import CV from "../assets/files/Stanley-Osuozah FrontendDev updated.pdf";

import Logo from "../assets/images/logo.png";
const NavBar = () => {
	const [navOpen, setNavOpen] = useState(false);
	const handleNav = () => {
		setNavOpen(!navOpen);
	};
	return (
		<div className="text-white flex justify-between h-20 w-full items-center px-4 bg-blue-950">
			<div>
				<img src={Logo} alt="Logo" height={50} width={50} />
			</div>

			<div className="hidden md:flex">
				<ul className="hidden md:flex justify-between gap-4 px-4 cursor-pointer">
					<li>
						<Link to="home" smooth={true} duration={500}>
							Home
						</Link>
					</li>
					<li>
						<Link to="about" smooth={true} duration={500}>
							About Me
						</Link>
					</li>

					<li>
						<Link to="skills" smooth={true} duration={500}>
							Skills
						</Link>
					</li>
					<li>
						<Link to="projects" smooth={true} duration={500}>
							Projects
						</Link>
					</li>
					<li>
						<Link to="contact" smooth={true} duration={500}>
							Contact
						</Link>
					</li>
				</ul>
			</div>

			<div className="md:hidden z-20" onClick={handleNav}>
				{!navOpen ? (
					<FaBars className="w-6 h-6" />
				) : (
					<FaTimes className="w-6 h-6" />
				)}
			</div>
			{/* For mobile menu */}
			<ul
				className={`${
					!navOpen
						? "hidden"
						: "h-screen w-full inset-0 absolute flex flex-col justify-center items-center gap-6 bg-blue-950"
				}`}
			>
				<li className="text-2xl font-Inter">
					<Link to="home" onClick={handleNav} smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="text-2xl font-Inter">
					<Link to="home" onClick={handleNav} smooth={true} duration={500}>
						About Me
					</Link>
				</li>
				<li className="text-2xl font-Inter">
					<Link to="home" onClick={handleNav} smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className="text-2xl font-Inter">
					<Link to="home" onClick={handleNav} smooth={true} duration={500}>
						Projects
					</Link>
				</li>
				<li className="text-2xl font-Inter">
					<Link to="home" onClick={handleNav} smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* SOCIALS */}
			<div className="hidden fixed top-[35%] left-0 md:flex flex-col">
				<ul>
					<li className="h-[60px] w-[160px] bg-blue-700 px-2 -ml-[100px] hover:ml-0 duration-300 flex justify-between items-center">
						<a
							href="https://www.linkedin.com/in/stanley-osuozah-260292142/"
							target="_blank"
							className=" inline-flex font-Inter font-bold justify-between items-center w-full text-gray-200"
						>
							LinkedIn
							<FaLinkedin className="w-[40px] h-[40px]" />
						</a>
					</li>
					<li className="h-[60px] w-[160px] bg-gray-900 px-2 -ml-[100px] hover:ml-0 duration-300 flex justify-between items-center">
						<a
							href="https://github.com/stanosuozah"
							target="_blank"
							className=" inline-flex font-Inter font-bold justify-between items-center w-full text-gray-200"
						>
							GitHub
							<FaGithub className="w-[40px] h-[40px]" />
						</a>
					</li>

					<li className="h-[60px] w-[160px] bg-gray-600 px-2 -ml-[100px] hover:ml-0 duration-300 flex justify-between items-center">
						<a
							href={CV}
							download
							className=" inline-flex font-Inter font-bold justify-between items-center w-full text-gray-200"
						>
							My Resume
							<BsFillPersonLinesFill className="w-[40px] h-[40px]" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
