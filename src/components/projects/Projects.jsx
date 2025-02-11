import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
//import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import blogAppImage from "./projectImages/Screenshot 2025-02-11 195323.png"

const projects = [
  {
    title: "BlogApp - A Full-Stack Blogging Platform",
    description: "BlogApp is a feature-rich, full-stack blogging platform that allows users to create, read, update, and delete blog posts. It includes authentication, user interactions, and a seamless UI/UX for an engaging experience.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "bcrypt", "Tailwind CSS", "Cloudinary"],
    liveLink: "https://blog-app-frontend-sooty.vercel.app/", 
    githubLink: "https://github.com/aakritrajput/BlogAppBackend",
    image: blogAppImage, 
  },
  {
    title: "ShopEase Backend - A Scalable E-commerce API",
    description: "The ShopEase Backend is a robust and scalable RESTful API designed to power an e-commerce platform. It efficiently handles product management, user authentication, order processing, and payment integration.",
    tech: ["Node.js","Express.js", "Sequelize (MySQL)","Mongoose (MongoDB)","JWT & bcrypt", "Tailwind CSS"],
    githubLink: "https://github.com/aakritrajput/ShopEaseBackend"
  }
];

export default function ProjectsSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for Next, -1 for Prev

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="relative w-full max-w-2xl overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 100 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
          >
            {/* Show image if available */}
            {projects[index].image && (
              <motion.img
                src={projects[index].image}
                alt={projects[index].title}
                className="w-full max-w-lg mb-4 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
            )}

            <h3 className="text-2xl font-semibold mb-3">{projects[index].title}</h3>
            <p className="text-gray-300 mb-4">{projects[index].description}</p>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {projects[index].tech.map((tech) => (
                <span key={tech} className="bg-purple-500 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {projects[index].liveLink && (
                <a href={projects[index].liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                   Live Demo
                </a>
              )}
              {projects[index].githubLink && (
                <a href={projects[index].githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline">
                   GitHub
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex gap-4 mt-6">
        <button onClick={prevSlide} className="px-4 py-2 bg-gray-700 hover:bg-purple-600 rounded-lg">Prev</button>
        <button onClick={nextSlide} className="px-4 py-2 bg-gray-700 hover:bg-purple-600 rounded-lg">Next</button>
      </div>
    </div>
  );
}
