import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Experience({ logos }) {
  const algorhythmLogo = getImage(logos.algorhythm);
  const bleckmannLogo = getImage(logos.bleckmann);
  const biscuiterieThijsLogo = getImage(logos.biscuiterieThijs);
  const algerieTelecomLogo = getImage(logos.algerieTelecom);
  const plaisanciaLogo = getImage(logos.plaisancia);

  return (
    <div className="">
      <h1 className="text-3xl font-semibold mt-4 mb-6">WORK EXPERIENCE</h1>
      <hr className="mb-6" />
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <GatsbyImage
            image={algorhythmLogo}
            alt="Algorhythm Logo"
            className="w-8 h-8 mr-3"
          />
          <h2 className="text-xl font-bold">
            Data Observability Intern, Algorhythm
          </h2>
        </div>
        <p className="text-customTeal">February 2024 - May 2024</p>
        <p className="text-customTeal">
          <span className="font-semibold">Tournhout, Belgium</span>
        </p>
        <ul className="list-disc p-5 custom-teal-bullets">
          <li>
            Conducted a comparative study of Data Observability tools,
            evaluating their capabilities to determine the best fit for
            Algorhythm's managed services.
          </li>
          <li>
            Developed evaluation criteria for assessing tool capabilities,
            including integration, scalability, and cost, and validated these
            criteria with key stakeholders.
          </li>
          <li>
            Built a sandbox environment using Docker, integrating tools such as
            Airflow, Airbyte, dbt, Spark, Hive Metastore, S3, and Postgres DWH
            for testing data observability tools (OpenMetadata, Great
            Expectations).
          </li>
          <li>
            Hosted the Dockerized pipeline on a Virtual Machine (VM) on Azure,
            ensuring a robust and scalable testing environment.
          </li>
          <li>
            Implemented a Proof of Concept (POC) using OpenMetadata, testing its
            effectiveness for data quality, freshness, schema, lineage, volume
            monitoring, cataloging, and tagging for 360 metadata management.
          </li>
          <li>
            Engaged with vendors to gather detailed pricing and feature
            information for shortlisted tools.
          </li>
          <li>
            Documented findings and presented recommendations to stakeholders
            based on POC results and market research.
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center mb-2">
            <GatsbyImage
              image={bleckmannLogo}
              alt="Bleckmann Logo"
              className="w-8 h-8 mr-3"
            />
            <p className="font-bold text-lg">Warehouse order picker</p>
          </div>
          <p className="text-customTeal">
            <span className="font-semibold">Bleckmann Grobbendonk</span> [2022]
            (current)
          </p>
          <p className="text-customTeal">City: Bouwel</p>
          <p className="text-customTeal">Country: Belgium</p>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <GatsbyImage
              image={biscuiterieThijsLogo}
              alt="Biscuiterie Thijs Logo"
              className="w-8 h-8 mr-3"
            />
            <p className="font-bold text-lg">Machine operator</p>
          </div>
          <p className="text-customTeal">
            <span className="font-semibold">Biscuiterie Thijs</span> [2021]
          </p>
          <p className="text-customTeal">City: Herentals</p>
          <p className="text-customTeal">Country: Belgium</p>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <GatsbyImage
              image={algerieTelecomLogo}
              alt="Algérie Telecome Logo"
              className="w-8 h-8 mr-3"
            />
            <p className="font-bold text-lg">Frontend Engineer Intern</p>
          </div>
          <p className="text-customTeal">
            <span className="font-semibold">Algérie Telecome</span> [2020]
          </p>
          <p className="text-customTeal">City: Jijel</p>
          <p className="text-customTeal">Country: Algeria</p>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <GatsbyImage
              image={plaisanciaLogo}
              alt="Restaurant Plaisancia Logo"
              className="w-8 h-8 mr-3"
            />
            <p className="font-bold text-lg">Restaurant manager assistant</p>
          </div>
          <p className="text-customTeal">
            <span className="font-semibold">Restaurant Plaisancia</span> [2019]
          </p>
          <p className="text-customTeal">City: Jijel</p>
          <p className="text-customTeal">Country: Algeria</p>
        </div>
      </div>
    </div>
  );
}
