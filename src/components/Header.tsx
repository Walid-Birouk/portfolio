import React, { useState, useEffect } from 'react';

const roles = ['Data Engineer.', 'Analytics Engineer.'];

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
      } else if (isDeleting && text === 'Data ') {
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
            I am a Master's student in{' '}
            <span className="text-accent">Expert Systems (AI)</span> at EPSI
            France, building on a Bachelor's in{' '}
            <span className="text-accent">Applied Computer Science (AI)</span>{' '}
            from Thomas More in Belgium.
          </p>
          <p>
            I specialize in building end-to-end data pipelines and{' '}
            <span className="text-accent">lakehouse architectures</span> using{' '}
            <span className="text-accent">Spark, Kafka, dbt,</span> and{' '}
            <span className="text-accent">Airflow</span>. During my internship
            at Algorhythm I built ELT pipelines following a medallion
            architecture and implemented data quality checks across 20+ dbt
            models.
          </p>
          <p>
            Currently seeking an{' '}
            <span className="text-accent">apprenticeship (alternance)</span> in
            Data Engineering or Analytics Engineering.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap mt-8 gap-3 items-center">
        <a
          href={`${base}/projects/data-observability-internship`}
          className="font-mono text-sm px-4 py-2 border border-accent/40 rounded text-[#e5e5e5] hover:bg-accent/10 hover:text-accent transition"
        >
          Internship
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
