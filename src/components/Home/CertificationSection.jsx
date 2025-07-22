"use client";
import { useState } from "react";
import python1 from "../../../public/certificates/python1.png"
import python2 from "../../../public/certificates/python2.png"
import python3 from "../../../public/certificates/python3.png"
import MLFoundations from "../../../public/certificates/MLFoundations.png"

const certifications = [
  {
    title: "Machine Learning Foundations",
    issuer: "University of Washington",
    date: "July 2025",
    image: MLFoundations,
    link: "https://coursera.org/share/268aa2ce4ff83567d21845f3e3b89c98",
    description: "",
  },
  {
    title: "Using Python to Access Web Data",
    issuer: "University of Michigan",
    date: "April 2025",
    image: python3,
    link: "https://coursera.org/share/93b1b324c8ff2ff274697fefca90b14c",
    description: "",
  },
  {
    title: "Python Data Structures",
    issuer: "University of Michigan",
    date: "April 2025",
    image: python2,
    link: "https://coursera.org/share/ffc60b59658e7c9200d17966b116003c",
    description: "",
  },
  {
    title: "Programming for everybody (Getting started with python)",
    issuer: "University of Michigan",
    date: "April 2025",
    image: python1,
    link: "https://coursera.org/share/36cfacdadedeb663cd0106fe4d3cd29c",
    description: "",
  },
];

export default function CertificationsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(prev => (prev === index ? null : index)); // toggle or switch
  };

  return (
    <section className="px-4 sm:px-10 py-10 my-1 w-full">
  <h2 className="text-3xl font-bold text-center text-white mb-10">
    Certifications
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {certifications.map((cert, index) => {
      const isOpen = openIndex === index;

      return (
        <div
          key={index}
          className="w-full rounded-2xl bg-white/10 backdrop-blur-md p-5 border flex flex-col justify-center border-white/10 shadow-md transition-all"
        >
          {/* Header Section */}
          <div
            onClick={() => handleToggle(index)}
            className="cursor-pointer flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#63ffc3]">
                {cert.title}
              </h3>
              <p className="text-sm text-white/70">{cert.issuer}</p>
              <p className="text-xs text-white/40">{cert.date}</p>
            </div>
            <div className="text-2xl text-[#63ffc3]">
              {isOpen ? "−" : "+"}
            </div>
          </div>

          {/* Collapsible Content */}
          <div
            className={`transition-all duration-500 overflow-hidden ${
              isOpen ? "max-h-[1000px] mt-4 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <img
              src={cert.image}
              alt={cert.title}
              loading="lazy"
              className="rounded-lg w-full max-w-md mb-3"
            />
            <p className="text-sm text-white/80 mb-2">{cert.description}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#63ffc3] underline"
            >
              View Credential
            </a>
          </div>
        </div>
      );
    })}
  </div>
</section>


  );
}
