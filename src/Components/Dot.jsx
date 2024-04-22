import React from "react";

function Dot({ active, onClick }) {
  return (
    <button
      className={`dot ${
        active ? "bg-black" : "bg-gray-400"
      } w-2 h-2 rounded-full mr-2 focus:outline-none`}
      onClick={onClick}
    ></button>
  );
}

export default Dot;
