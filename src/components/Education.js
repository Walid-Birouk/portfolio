import React from "react";

export default function Education() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mt-4 mb-2">
        EDUCATION AND TRAINING
      </h1>
      <br />
      <hr />
      <br />
      <div className="mb-4">
        <h2 className="text-xl font-bold">
          Bachelor's degree in Applied Computer Science (Artificial
          Intelligence)
        </h2>
        <p className="text-gray-400 pl-2">
          <em>Thomas More Hogeschool [ 2021 - 2024 ] (English Course)</em>
        </p>
        <p className="text-gray-400 pl-2">
          Address: Kleinhoefstraat, 4, 2440, Geel, Belgium{" "}
        </p>
      </div>
      <h4 className=" pb-2 font-bold">Relevant Coursework</h4>
      <div className="grid grid-cols-2 gap-4">
        <ul className="list-disc pl-5">
          <li>Artificial Intelligence Project</li>
          <li>Business Intelligence Project</li>
          <li>Data Engineering</li>
          <li>Data Analysis with SQL</li>
        </ul>
        <ul className="list-disc pl-5">
          <li>Data Science</li>
          <li>Big Data</li>
          <li>Full stack (Laravel, Springboot, ASP.NET)</li>
        </ul>
      </div>
      <br />
      <hr />
      <br />
      <div className="mb-4">
        <h2 className="text-xl font-bold">
          Bachelor's degree in Mathematics and Informatics (Sofware devolepment){" "}
        </h2>
        <p className="text-gray-400 pl-2">
          <em>Université de Jijel [ 2018 - 2021 ] (French Course)</em>
        </p>
        <p className="text-gray-400 pl-2">
          Address: Ouled Aissa, 18000, Jijel, Algeria{" "}
        </p>
      </div>
      <h4 className=" pb-2 font-bold">Relevant Coursework & Skills</h4>
      <div className="grid grid-cols-2 gap-4">
        <ul className="list-disc pl-5">
          <li>Computer algorithms and programming</li>
          <li>Calculus</li>
          <li>Algebra</li>

          <li>Web design (HTML, CSS, SASS, JS)</li>
        </ul>
        <ul className="list-disc pl-5">
          <li>Java</li>
          <li>C, C#</li>
          <li>PHP</li>
          <li>Python</li>
        </ul>
      </div>
    </div>
  );
}
