import React from "react";

const Footer = () => {
  let footerStyle = {
    position: "absolute",
    width: "100%",
    height: "120px",
    color: "white",
    padding: "10px",
    fontSize: "20px",
  };
  return (
    <footer className="text-light py-3 text-center bg-dark" style={footerStyle}>
      <p className="mb-0">© 2023 To Do List. All rights reserved.</p>
      <p className="mb-0">Developed by Abhinav Singhal</p>
      <p className="mb-0">Contact: abhinavsinghal876@gmail.com</p>
    </footer>
  );
};

export default Footer;
