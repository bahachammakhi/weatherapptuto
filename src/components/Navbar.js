import React from "react";

const Navbar = ({ goback, search }) => {
  return (
    <div
      style={{ display: "flex", height: "70px", backgroundColor: "aliceblue" }}
    >
      <p
        style={{
          position: "absolute",
          cursor: "pointer",
          left: "5px",
          top: "0",
        }}
        onClick={goback}
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAWCAYAAAAb+hYkAAAABHNCSVQICAgIfAhkiAAAAGRJREFUOI3tzrEJhGAQROFPja4Jmzj4Y1MvEezKbi7SGizG1NjEQATBDQRBJ1lY5jEvE8sXVQRo8H+BBwBtFIABdRSCHt3Zcr7eHyaM+EQXE2ZX6OYH/5voHunts9UtsuBiQrkAJcoZhALYVFMAAAAASUVORK5CYII="
          alt="goback"
        />
      </p>
      <div
        style={{
          position: "absolute",
          right: "5px",
          top: "0",
        }}
      >
        {search}
      </div>
    </div>
  );
};

export default Navbar;
