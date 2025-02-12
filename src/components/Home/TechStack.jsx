import { motion } from "framer-motion";

const techStack = [
  { name: "React", src: "/public/tech/react.svg" },
  { name: "Node.js", src: "/public/tech/nodedotjs.svg" },
  { name: "MongoDB", src: "/public/tech/mongodb.svg" },
  { name: "Express.js", src: "/public/tech/express.svg" },
  { name: "JavaScript", src: "/public/tech/javascript.svg" },
  { name: "Tailwind", src: "/public/tech/tailwindcss.svg" },
  { name: "HTML5", src: "/public/tech/html5.svg" },
  { name: "Appwrite", src: "/public/tech/appwrite.svg" },
  { name: "C language", src: "/public/tech/c.svg" },
  { name: "CSS3", src: "/public/tech/css3.svg" },
  { name: "Git", src: "/public/tech/git.svg" },
  { name: "Github", src: "/public/tech/github.svg" },
  { name: "JWT", src: "/public/tech/jsonwebtokens.svg" },
  { name: "MySql", src: "/public/tech/mysql.svg" },
  { name: "Postman", src: "/public/tech/postman.svg" },
  { name: "Python", src: "/public/tech/python.svg" },
  { name: "Render", src: "/public/tech/render.svg" },
  { name: "sequelize", src: "/public/tech/sequelize.svg" },
  { name: "vercel", src: "/public/tech/vercel.svg" },
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
