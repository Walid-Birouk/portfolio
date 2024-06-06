import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Education({ logos }) {
  const thomasMoreLogo = getImage(logos.thomasMore);
  const universiteDeJijelLogo = getImage(logos.universiteDeJijel);

  return (
    <div>
      <h1 className="text-3xl font-semibold mt-4 mb-2">
        EDUCATION AND TRAINING
      </h1>
      <br />
      <hr />
      <br />
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <GatsbyImage
            image={thomasMoreLogo}
            alt="Thomas More Hogeschool Logo"
            className="w-8 h-8 mr-3"
          />
          <h2 className="text-xl font-bold">
            Bachelor's degree in Applied Computer Science (Artificial
            Intelligence)
          </h2>
        </div>
        <p className="text-customTeal pl-2">
          <em>Thomas More Hogeschool [ 2021 - 2024 ] (English Course)</em>
        </p>
        <p className="text-customTeal pl-2">
          Address: Kleinhoefstraat, 4, 2440, Geel, Belgium{" "}
        </p>
      </div>
      <h4 className=" pb-2 font-bold">Relevant Coursework</h4>
      <div className="grid grid-cols-2 gap-4">
        <ul className="list-disc pl-5 custom-teal-bullets">
          <li>Artificial Intelligence Project</li>
          <li>Business Intelligence Project</li>
          <li>Data Engineering</li>
          <li>Data Analysis with SQL</li>
        </ul>
        <ul className="list-disc pl-5 custom-teal-bullets">
          <li>Data Science</li>
          <li>Big Data</li>
          <li>Full stack (Laravel, Springboot, ASP.NET)</li>
        </ul>
      </div>
      <br />
      <hr />
      <br />
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <GatsbyImage
            image={universiteDeJijelLogo}
            alt="Université de Jijel Logo"
            className="w-8 h-8 mr-3"
          />
          <h2 className="text-xl font-bold">
            Bachelor's degree in Mathematics and Informatics (Software
            Development)
          </h2>
        </div>
        <p className="text-customTeal pl-2">
          <em>Université de Jijel [ 2018 - 2021 ] (French Course)</em>
        </p>
        <p className="text-customTeal pl-2">
          Address: Ouled Aissa, 18000, Jijel, Algeria{" "}
        </p>
      </div>
      <h4 className=" pb-2 font-bold">Relevant Coursework & Skills</h4>
      <div className="grid grid-cols-2 gap-4">
        <ul className="list-disc pl-5 custom-teal-bullets">
          <li>Computer algorithms and programming</li>
          <li>Calculus</li>
          <li>Algebra</li>
          <li>Web design (HTML, CSS, SASS, JS)</li>
        </ul>
        <ul className="list-disc pl-5 custom-teal-bullets">
          <li>Java</li>
          <li>C, C#</li>
          <li>PHP</li>
          <li>Python</li>
        </ul>
      </div>
    </div>
  );
}
