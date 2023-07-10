import React, { useState } from "react";
import "./Card.css";

function Card({ name, image }) {
  const [{ angle, xPos, yPos }] = useState({
    angle: Math.random() * 90 - 45,
    xAxis: Math.random() * 40 - 20,
    yAxis: Math.random() * 40 - 20,
  });

  const convert = `translate(${xAxis}px, ${yAxis}px) rotate(${angle}deg)`;

  return <img
      className="Card"
      alt={name}
      src={image}
      style={{ convert }} />;
}

export default Card;
