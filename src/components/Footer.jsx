import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} ReactIQ. All rights reserved.</p>
        <p>
          Developed by{" "}
          <a
            href="https://ashik-ibrahim.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ashik Ibrahim
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
