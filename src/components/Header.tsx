import React, { useState, useEffect } from 'react';

const roles = ['AI Engineer.', 'Data Engineer.', 'ML Engineer.'];

export default function Header() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  useEffect(() => {
    const fullText = roles[loopNum % roles.length];

    const timer = setTimeout(() => {
      setText(fullText.substring(0, text.length + (isDeleting ? -1 : 1)));
      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum((n) => n + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="flex flex-col justify-between h-full w-full">
      <div>
        <h1 className="text-3xl md:text-5xl pb-4 font-mono font-bold text-[#e5e5e5]">
          PORTFOLIO
        </h1>
        <h2 className="text-base md:text-xl pb-4 font-mono">
          <span className="text-accent font-bold">{text}</span>
          <span className="blink-cursor text-accent">|</span>
        </h2>
        <div className="text-sm md:text-base space-y-3 text-[#d4d4d4] leading-relaxed">
          <p>
            I am an <span className="text-accent">AI & Data Engineer</span> with
            2.5 years of hands-on experience building AI that runs in
            production: a <span className="text-accent">RAG agent</span> over
            BigQuery integrated into HubSpot, an{' '}
            <span className="text-accent">n8n AI agent</span> answering 50–100
            customer messages a day for a fashion e-commerce brand, and{' '}
            <span className="text-accent">computer-vision models</span> for
            railway safety at Infrabel.
          </p>
          <p>
            I work from data models and pipelines (
            <span className="text-accent">PostgreSQL, dbt, Spark, Airflow</span>)
            to deploying models and agents on{' '}
            <span className="text-accent">GCP and AWS</span>.
          </p>
          <p>
            Available now for a{' '}
            <span className="text-accent">full-time role</span> as an AI
            Engineer or Data / ML Engineer, in Paris or anywhere in France.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap mt-8 gap-3 items-center">
        <a
          href={`${base}/projects/ghazeline-ecommerce`}
          className="font-mono text-sm px-4 py-2 border border-accent/40 rounded text-[#e5e5e5] hover:bg-accent/10 hover:text-accent transition"
        >
          Latest work
        </a>
        <a
          href={`${base}/projects`}
          className="font-mono text-sm px-4 py-2 border border-accent/40 rounded text-[#e5e5e5] hover:bg-accent/10 hover:text-accent transition"
        >
          Projects
        </a>
        <a
          href={`${base}/about`}
          className="font-mono text-sm px-4 py-2 border border-accent/40 rounded text-[#e5e5e5] hover:bg-accent/10 hover:text-accent transition"
        >
          About
        </a>
        <a
          href={`${base}/downloads/CV.pdf`}
          download="CV_Walid_Birouk.pdf"
          className="font-mono text-sm px-4 py-2 bg-accent/10 border border-accent rounded text-accent hover:bg-accent/20 transition"
        >
          CV ↓
        </a>
      </div>
    </div>
  );
}
