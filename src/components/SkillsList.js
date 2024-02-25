import React from 'react';

const SkillsList = ({ title, items }) => (
  <div>
    <h3 className="text-2xl font-semibold mt-4 mb-2">{title}</h3>
    <ul className="list-disc pl-4 mb-4">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default SkillsList;