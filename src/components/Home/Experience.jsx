// src/components/home/Experience.jsx
import { motion } from 'motion/react'

const experienceData = [
  {
    title: "Fullstack Developer Intern",
    company: "Raniac",
    duration: "May 2025 – Present",
    description: "Built scalable backend features, integrated REST APIs, and improved performance for a professional website using Django and working on industry standard projects fulfilling their website's frontend and backend needs.",
  },
  {
    title: "Frontend Developer Intern",
    company: "Raniac",
    duration: "Feb 2025 – May 2025",
    description: "Worked on logical frontend implementations, landing pages, and reusable components using Next.js, TypeScript, and other tools. Solved problems related to their specific needs which teached innovative thinking while doing even frontend projects.",
  },
];

const Experience = () => {
  return (
    <div className="w-full px-4 sm:px-10 py-10">
      <h2 className="text-white font-bold text-3xl text-center mb-10">Experience</h2>
      <div className="relative border-l-4 border-[#6f4ba6] ml-4 sm:ml-10">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-10 ml-6 relative"
          >
            {/* Dot */}
            <span className="absolute -left-[36px] top-2 w-5 h-5 bg-gradient-to-br from-[#6f4ba6] to-[#00ffd5] border-[3px] border-black rounded-full shadow-lg" />

            {/* Content */}
            <div className="bg-gradient-to-br from-[#191919] via-[#1f1f1f] to-[#111111] border border-[#444] text-white p-5 rounded-xl shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold text-[#6f4ba6]">{exp.title}</h3>
              <p className="text-sm sm:text-md text-[#00ffd5]">{exp.company}</p>
              <p className="text-xs sm:text-sm text-gray-300 italic">{exp.duration}</p>
              <p className="text-sm mt-2">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
