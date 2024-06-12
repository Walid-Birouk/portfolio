import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import FileDownload from "./FileDownload";

export default function Header() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const roles = ["Data Engineer.", "Data Specialist.."];
    const current = loopNum % roles.length;
    const fullText = roles[current];

    const handleTyping = () => {
      setText(fullText.substring(0, text.length + (isDeleting ? -1 : 1)));
      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // Start deleting after a pause
      } else if (isDeleting && text === "Data ") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1); // Move to the next word after deleting
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h1 className="text-3xl md:text-5xl pb-5 font-bold">PORTFOLIO</h1>
        <h2 className="text-base md:text-xl pb-2">
          Aspiring <span className="typing-container font-bold">{text}</span>
          <span className="blink-cursor">|</span>
        </h2>
        <div className="text-sm md:text-base">
          <p className="pb-2">
            I hold a Bachelor's degree in{" "}
            <span className="text-bold typing-container">
              Applied Computer Science
            </span>{" "}
            from Thomas More in Belgium, specializing in{" "}
            <span className="typing-container">Artificial Intelligence</span>.
            My solid foundation in{" "}
            <span className="typing-container">
              Mathematics and Informatics
            </span>{" "}
            from my studies in Algeria has equipped me with diverse skills and a
            deep curiosity about the world of data.
          </p>
          <p className="pb-2">
            During my internship at{" "}
            <span className="typing-container">Algorhythm</span>, I had the
            opportunity to dive deep into{" "}
            <span className="typing-container">Data Observability</span> tools.
            I developed a Dockerized ETL pipeline and implemented a Proof of
            Concept using OpenMetadata. This experience significantly enhanced
            my knowledge in data engineering, data quality, monitoring, and
            governance.
          </p>
          <p className="pb-2">
            I am passionate about all aspects of data, from managing and
            understanding it, to visualizing and using it to power AI models.
            This passion drives me to continuously learn and explore new
            technologies and methodologies. I am always eager to take on new
            challenges and contribute innovative solutions to the dynamic fields
            of IT and data science.
          </p>
          <p className="pb-2">
            Explore my portfolio to see my work, including my internship
            project, other projects, and my professional journey. I am excited
            to share my experiences and look forward to connecting with{" "}
            like-minded professionals.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap mt-6 gap-2 md:gap-5">
        <Link
          className="px-2 text-white text-center py-2 rounded hover:text-customTeal-200 transition-colors"
          to="/projects/data-observability-internship/"
        >
          Internship
        </Link>
        <span className="text-white mx-2">|</span>
        <Link
          className="px-2 text-white text-center py-2 rounded hover:text-customTeal-200 transition-colors"
          to="/projects"
        >
          Projects
        </Link>
        <span className="text-white mx-2">|</span>
        <Link
          className="px-2 text-white text-center py-2 rounded hover:text-customTeal-200 transition-colors"
          to="/about"
        >
          About
        </Link>
        <span className="text-white mx-2">|</span>
        <FileDownload
          fileLink="downloads/CV.pdf"
          fileLabel="CV.pdf"
          label="CV Download"
        />
      </div>
    </div>
  );
}
