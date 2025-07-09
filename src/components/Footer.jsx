import React from "react";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`footer sm:footer-horizontal bg-neutral text-neutral-content p-10 ${className}`}>
      <aside>
        <div>
          <span
            className="text-3xl md:text-4xl font-extrabold"
            style={{
              fontFamily: "'Pacifico', cursive",
              color: "#f59e42",
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
                color: "#f59e42",
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
        <p>Made with ❤️ by Kush</p>
      </aside>
     
    </footer>
  );
};

export default Footer;
