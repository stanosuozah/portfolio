import { React, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaBars } from "react-icons/fa";
import ProjectCard from "../assets/components/ProjectCard";
import emailjs from "@emailjs/browser";

const LandingPage = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_4lsr0mn",
				"template_d2vux6j",
				form.current,
				"Sw9NrLtJMjgI55HWT"
			)
			.then(
				(result) => {
					console.log(result.text);
					alert("Message sent!");
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="bg-slate-950 text-white px-8 py-4 lg:px-24">
			<header className="flex flex-col gap-2 justify-center md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
				<nav className="flex flex-col gap-2 justify-center items-center lg:mb-8 md:flex-row md:justify-between  lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between sm:p-0 md:p-0 lg:p-0 xl:p-0 2xl:p-0">
					<p>stanleyosuozah</p>

					<div className="flex gap-3 items-center">
						<a href="https://github.com/stanosuozah" target="_blank">
							<FaGithub />
						</a>
						<a
							href="https://www.linkedin.com/in/stanley-osuozah-260292142/"
							target="_blank"
						>
							<FaLinkedin />
						</a>
						<a
							className="cursor-pointer"
							href="/files/Stanley-Osuozah FrontendDev updated.pdf"
							download
						>
							<p className="font-sans">Resume</p>
						</a>
					</div>
				</nav>
				<div className="flex flex-col-reverse gap-12 md:flex lg:flex lg:justify-between lg:items-center md:justify-between justify-center items-center md:flex-row border-b-4 border-b-white">
					<div className="flex md:flex md:flex-col md:items-start md:gap-6 lg:flex-col lg:-mr-6 lg:gap-8 lg:items-start md:items-left md:justify-start lg:flex flex-col gap-5 items-center md:-mr-10 z-10 pb-12 ">
						<div className="">
							<h1 className="font-sans text-3xl text-center md:text-left lg:text-left lg:text-4xl">
								Nice to meet you!
							</h1>
							<h1 className="font-sans text-3xl text-center">
								I'm{" "}
								<span className="border-b-4 border-lime-600">
									Stanley Osuozah.
								</span>
							</h1>
						</div>

						<p className="font-sans text-base text-center md:text-sm md:w-[60ch]  md:text-left lg:text-sm lg:w-[60ch] lg:text-left">
							Based in Birmingham, UK. I'm a frontend developer passionate about
							building responsive and accessible web applications that users
							love
						</p>
						<h3 className="font-sans text-2xl border-b-4 border-b-lime-600 pb-3">
							CONTACT ME
						</h3>
					</div>
					<div className="">
						<img src="/images/stanosuozah.png" className="" />
					</div>
				</div>
			</header>
			<section className="flex flex-col md:grid md:grid-cols-2 md:text-left lg:grid lg:grid-cols-4 lg:text-left text-center gap-5 pt-12 pb-12 border-b-4 border-b-white">
				<div>
					<h1 className="text-2xl font-sans">React</h1>
				</div>
				<div>
					<h1 className="text-2xl font-sans">Tailwind CSS</h1>
				</div>
				<div>
					<h1 className="text-2xl font-sans">JavaScript</h1>
				</div>
				<div>
					<h1 className="text-2xl font-sans">HMTL</h1>
				</div>
				<div>
					<h1 className="text-2xl font-sans">CSS</h1>
				</div>
				<div>
					<h1 className="text-2xl font-sans">TypeScript</h1>
				</div>
				<div>
					<h1 className="text-2xl font-sans">WordPress</h1>
				</div>
				<div>
					<h1 className="text-2xl font-sans">Scrum</h1>
				</div>
			</section>
			<section className="flex flex-col gap-7 mt-20 pb-12 border-b-4 border-b-white ">
				<div className="flex justify-between items-center">
					<h1 className="font-sans text-3xl">Projects</h1>
					<p className=" font-sans text-md border-b-4 border-b-lime-600 pb-3">
						CONTACT ME
					</p>
				</div>
				<div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-7 lg:grid lg:grid-cols-2 lg:gap-8">
					<ProjectCard
						image="/images/unideals.png"
						name="UNIDEALS WEB APP"
						language1="REACT"
						language2="JAVASCRIPT"
						language3="HTML"
						language4="TAILWIND CSS"
						webLink="https://myunideals.com/"
					/>

					<ProjectCard
						image="/images/finebank.png"
						name="FINTECH DASHBOARD"
						language1="REACT"
						language2="JAVASCRIPT"
						language3="HTML"
						language4="TAILWIND CSS"
					/>
					<ProjectCard
						image="/images/e-com.png"
						name="EXCLUSIVE E-COMMERCE WEB APP"
						language1="REACT"
						language2="JAVASCRIPT"
						language3="HTML"
						language4="CSS"
						webLink="https://exclusive-ecommerce.vercel.app/"
						gitCode="https://github.com/stanosuozah/exclusive-ecommerce"
					/>
					<ProjectCard
						image="/images/bloomway.png"
						name="BLOOMWAY HEALTHCARE WEBSITE"
						language1="WORDPRESS"
						language2="CSS"
						language3="HTML"
						webLink="https://bloomway.co.uk/"
					/>
					<ProjectCard
						image="/images/baseline.png"
						name="BASELINE HEALTHCARE WEBSITE"
						language1="WORDPRESS"
						language2="CSS"
						language3="HTML"
						webLink="https://baselinehealthcare.co.uk/"
					/>
					<ProjectCard
						image="/images/topassured.png"
						name="TOPASSURED HEALTHCARE WEBSITE"
						language1="WORDPRESS"
						language2="CSS"
						language3="HTML"
						webLink="https://topassuredhealthcare.com/"
					/>
				</div>
			</section>
			<section className="flex flex-col gap-5 mt-10 justify-center pb-12 border-b-4 border-b-white md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
				<div className="flex flex-col gap-3 text-center md:text-left lg:text-left">
					<h1 className="text-2xl font-sans md:text-lg lg:text-4xl font-bold">
						Contact
					</h1>
					<p className="font-sans text-base md:w-[40ch]">
						I would love to hear from you. Please fill in the form, and I'll get
						back to you as soon as possible
					</p>
				</div>
				<div className="">
					<form onSubmit={sendEmail} ref={form}>
						<div className="mb-4 sm:mb-8">
							<label
								htmlFor="hs-feedback-post-comment-name-1"
								className="block mb-2 text-sm font-medium dark:text-white"
							>
								Full name
							</label>
							<input
								type="text"
								name="name"
								className="py-3 px-4 block text-black font-sans w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4"
								placeholder="Full name"
							/>
						</div>

						<div className="mb-4 sm:mb-8">
							<label
								htmlFor="hs-feedback-post-comment-email-1"
								className="block mb-2 text-sm font-medium dark:text-white"
							>
								Email address
							</label>
							<input
								type="email"
								name="email"
								className="py-3 text-black font-sans px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4"
								placeholder="Email address"
							/>
						</div>

						<div>
							<label
								htmlFor="hs-feedback-post-comment-textarea-1"
								className="block mb-2 text-sm font-medium dark:text-white"
							>
								Message
							</label>
							<div className="mt-1">
								<textarea
									name="message"
									rows="3"
									className="text-black font-sans py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4"
									placeholder="Leave your message here.."
								></textarea>
							</div>
						</div>

						<div className="mt-6 grid">
							<button
								type="submit"
								className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-lime-500 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</section>
			<footer className="flex flex-col mt-4">
				<nav className="flex gap-2 justify-between  md:flex-row md:justify-between  lg:flex lg:justify-between ">
					<p>stanleyosuozah</p>

					<div className="flex gap-3 items-center">
						<a href="https://github.com/stanosuozah" target="_blank">
							<FaGithub />
						</a>
						<a
							href="https://www.linkedin.com/in/stanley-osuozah-260292142/"
							target="_blank"
						>
							<FaLinkedin />
						</a>
						<a
							className="cursor-pointer"
							href="/files/Stanley-Osuozah FrontendDev.pdf"
							download
						>
							<p className="font-sans">Resume</p>
						</a>
					</div>
				</nav>
			</footer>
		</div>
	);
};

export default LandingPage;
