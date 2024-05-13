import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import CVDownload from "./CVDownload";

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
        // Start deleting after a pause
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "Data ") {
        // Move to the next word after deleting
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
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
            As a recent graduate with a Bachelor’s in{" "}
            <span className="text-bold typing-container">
              Applied Computer Science
            </span>{" "}
            from Thomas More in Belgium, specializing in{" "}
            <span className="typing-container">Artificial Intelligence</span>, I
            bring a solid foundation in{" "}
            <span className="typing-container">
              Mathematics and Informatics
            </span>{" "}
            from my studies in Algeria.{" "}
          </p>
          <p>
            Data fascinates me—whether it's about managing it, understanding it,
            visualizing it, or utilizing it to power advanced AI models. My
            international education was driven by a strong desire to deepen my
            expertise, refine my skills, and engage in groundbreaking projects.
            I am now eager to contribute my knowledge and innovative perspective
            to the dynamic fields of IT and data science.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap mt-6 gap-2 md:gap-5">
        <Link
          className="px-2 text-white text-center py-2 rounded hover:text-customTeal-200 transition-colors"
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className="px-2 text-white text-center py-2 rounded hover:text-customTeal-200 transition-colors"
          to="/about"
        >
          About
        </Link>
        <CVDownload cvLink="downloads/CV.pdf" cvLabel="CV.pdf" />
      </div>
    </div>
  );
}
