import React from "react";

export default function Experience() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mt-4 mb-2">WORK EXPERIENCE</h1>

      <br />
      <hr />
      <br />
      {/* Repeat the structure for work experience */}
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <p className="font-bold">Warehouse order picker</p>
          <p className="text-gray-400 pl-2">
            <em>
              <strong>Bleckmann [2022]</strong>
            </em>
          </p>
          <p className="text-gray-400 pl-2">
            <em>
              <strong>City: Bouwel</strong>
            </em>
          </p>
          <p className="text-gray-400 pl-2">
            <em>
              <strong>Country:</strong> Belgium
            </em>
          </p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Machine operator</p>
          <p className="text-gray-400 pl-2">
            <em>
              <strong>Biscuiterie Thijs</strong> [2021]{" "}
            </em>
          </p>
          <p className="text-gray-400 pl-2">
            <em>
              <strong>City:</strong> Herentals
            </em>
          </p>
          <p className="text-gray-400 pl-2">
            <em>
              <strong>Country:</strong> Belgium
            </em>
          </p>
        </div>
        <div className="mb-4">
          <p className="font-bold">
            <strong>Intern </strong>
          </p>
          <p className="text-gray-400 pl-2">
            <em>
              <strong>Algérie Telecome</strong> [2020]{" "}
            </em>
          </p>
          <p className="text-gray-400 pl-2">
            <em>
              <strong>City:</strong> Jijel
            </em>
          </p>
          <p className="text-gray-400 pl-2">
            <em>
              <strong>Country:</strong> Algeria
            </em>
          </p>
        </div>
        <div className="mb-4">
          <p className="font-bold">
            <strong>Restaurant manager assistant</strong>
          </p>
          <p className="text-gray-400 pl-2">
            <em>
              <strong>Restaurant Plaisancia</strong> [2019]{" "}
            </em>
          </p>
          <p className="text-gray-400 pl-2">
            <em>
              <strong>City:</strong> Jijel{" "}
            </em>
          </p>
          <p className="text-gray-400 pl-2">
            <em>
              <strong>Country:</strong> Algeria
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}
