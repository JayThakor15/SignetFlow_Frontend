import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md px-4 py-2 flex justify-between items-center h-16 sticky top-0 z-50">
      <div className="m-auto">
        <span
          className="text-3xl md:text-4xl font-extrabold "
          style={{
            fontFamily: "'Pacifico', cursive",
            color: "#f59e42", // Tailwind amber-500
            letterSpacing: "1px",
            textShadow: "0 2px 8px #fcd34d55",
          }}
        >
          S
        </span>
        <span className="text-3xl md:text-4xl font-bold tracking-tight">
          ignet
          <span
            style={{
              fontFamily: "'Pacifico', cursive",
              color: "#f59e42", // Tailwind amber-500
              letterSpacing: "1px",
              textShadow: "0 2px 8px #fcd34d55",
            }}
            className="text-3xl md:text-4xl font-extrabold"
          >
            F
          </span>
          low
        </span>
      </div>
      {/* Add right-side actions here if needed */}
    </nav>
  );
}
