import React from "react";

export default function Experience() {
  return (
    <div className="">
      <h1 className="text-3xl font-semibold mt-4 mb-6">WORK EXPERIENCE</h1>

      <hr className="mb-6" />
      <div className="mb-4">
        <h2 className="text-xl font-bold">
          Data Observability Intern, Algorhythm{" "}
        </h2>
        <p className="text-customTeal">February 2024 - May 2024</p>
        <p className="text-customTeal">
          <span className="font-semibold">Tournhout, Belgium</span>
        </p>
        <ul className="list-disc p-5 custom-teal-bullets">
          <li>
            Led comparative study on data observability tools to enhance
            metadata management.
          </li>
          <li>
            Developed Docker Compose environment for deploying a modern data
            stack.
          </li>
          <li>
            Configured and deployed OpenMetadata on Azure VM to manage data
            observability pillars including lineage, quality tests, schema
            changes, and discoverability.
          </li>
          <li>
            Utilized Spark & Hive metastore for lakehouse architecture, Airflow
            & Dbt for workflow and transformation, and Postgres for data
            warehousing.
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="font-bold text-lg">Warehouse order picker</p>
          <p className="text-customTeal">
            <span className="font-semibold">Bleckmann</span> [2022]
          </p>
          <p className="text-customTeal">City: Bouwel</p>
          <p className="text-customTeal">Country: Belgium</p>
        </div>
        <div>
          <p className="font-bold text-lg">Machine operator</p>
          <p className="text-customTeal">
            <span className="font-semibold">Biscuiterie Thijs</span> [2021]
          </p>
          <p className="text-customTeal">City: Herentals</p>
          <p className="text-customTeal">Country: Belgium</p>
        </div>
        <div>
          <p className="font-bold text-lg">Intern</p>
          <p className="text-customTeal">
            <span className="font-semibold">Algérie Telecome</span> [2020]
          </p>
          <p className="text-customTeal">City: Jijel</p>
          <p className="text-customTeal">Country: Algeria</p>
        </div>
        <div>
          <p className="font-bold text-lg">Restaurant manager assistant</p>
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
