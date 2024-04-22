
import React from "react";

function TeamMember({ name, role, description, image }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 transform hover:shadow-lg">
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-full mb-4 transition duration-300 transform hover:scale-110"
        />
        <h3 className="text-xl font-bold mb-2 text-center">{name}</h3>
        <p className="text-gray-600 text-center mb-2">{role}</p>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
}

export default TeamMember;
