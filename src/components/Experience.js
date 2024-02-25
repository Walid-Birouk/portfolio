import React from "react";

export default function Experience() {
  return (
    <div className="">
      <h1 className="text-3xl font-semibold mt-4 mb-6">WORK EXPERIENCE</h1>

      <hr className="mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="font-bold text-lg">Warehouse order picker</p>
          <p className="text-gray-500">
            <span className="font-semibold">Bleckmann</span> [2022]
          </p>
          <p className="text-gray-500">City: Bouwel</p>
          <p className="text-gray-500">Country: Belgium</p>
        </div>
        <div>
          <p className="font-bold text-lg">Machine operator</p>
          <p className="text-gray-500">
            <span className="font-semibold">Biscuiterie Thijs</span> [2021]
          </p>
          <p className="text-gray-500">City: Herentals</p>
          <p className="text-gray-500">Country: Belgium</p>
        </div>
        <div>
          <p className="font-bold text-lg">Intern</p>
          <p className="text-gray-500">
            <span className="font-semibold">Algérie Telecome</span> [2020]
          </p>
          <p className="text-gray-500">City: Jijel</p>
          <p className="text-gray-500">Country: Algeria</p>
        </div>
        <div>
          <p className="font-bold text-lg">Restaurant manager assistant</p>
          <p className="text-gray-500">
            <span className="font-semibold">Restaurant Plaisancia</span> [2019]
          </p>
          <p className="text-gray-500">City: Jijel</p>
          <p className="text-gray-500">Country: Algeria</p>
        </div>
      </div>
    </div>
  );
}
