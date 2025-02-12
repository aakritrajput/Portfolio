import { motion } from "framer-motion";
import react from "../../../public/tech/react.svg" 
import node from "../../../public/tech/nodedotjs.svg"
import mongo from "../../../public/tech/mongodb.svg"
import express from "../../../public/tech/express.svg"
import js from "../../../public/tech/javascript.svg"
import tailwind from "../../../public/tech/tailwindcss.svg"
import html5 from "../../../public/tech/html5.svg"
import appwrite from  "../../../public/tech/appwrite.svg"
import c from "../../../public/tech/c.svg"
import css3 from "../../../public/tech/css3.svg"
import git from "../../../public/tech/git.svg"
import github from "../../../public/tech/github.svg"
import jwt from "../../../public/tech/jsonwebtokens.svg"
import mysql from "../../../public/tech/mysql.svg"
import postman from "../../../public/tech/postman.svg"
import python from "../../../public/tech/python.svg" 
import render from "../../../public/tech/render.svg"
import sequelize from "../../../public/tech/sequelize.svg"
import vercel from "../../../public/tech/vercel.svg"

const techStack = [
  { name: "React", src: react  },
  { name: "Node.js", src: node },
  { name: "MongoDB", src: mongo },
  { name: "Express.js", src: express },
  { name: "JavaScript", src: js },
  { name: "Tailwind", src: tailwind },
  { name: "HTML5", src: html5 },
  { name: "Appwrite", src: appwrite },
  { name: "C language", src: c },
  { name: "CSS3", src: css3 },
  { name: "Git", src: git },
  { name: "Github", src: github },
  { name: "JWT", src: jwt },
  { name: "MySql", src: mysql },
  { name: "Postman", src: postman },
  { name: "Python", src: python },
  { name: "Render", src: render },
  { name: "sequelize", src: sequelize },
  { name: "vercel", src: vercel },
];

const TechStack = () => {
  return (
    <div className="w-full overflow-hidden py-10 bg-gray-900">
      <div className="relative flex items-center justify-center">
        <motion.div
          className="flex space-x-10"
          initial={{ x: "100%" }}
          animate={{ x: "-120%" }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          {techStack.map((tech, index) => (
            <img
              key={index}
              src={tech.src}
              alt={tech.name}
              className="h-14 w-auto transition duration-300"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
