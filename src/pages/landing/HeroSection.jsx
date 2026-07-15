import React, { useState } from "react";
import "./Landing.css";
import { useRef } from "react";
import OpenModal from "../../components/ui/OpenModal";
import Snowfall from "react-snowfall";

const HeroSection = () => {
  const [Open, SetOpen] = useState(false);
  const bgref = useRef(null);
  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    bgref.current.style.transform = `translate(${x}px, ${y}px) scale(1.12)`;
  };
  const HandleOpenWindow = () => {
    if (!Open) {
      SetOpen(true);
    } else {
      SetOpen(false);
    }
  };
  return (
    <>
      <Snowfall snowflakeCount={200} />
      <div className="Hero_Container" onMouseMove={handleMouseMove}>
        <h3>Made by Huseyn Mammadov.</h3>
        <p>
          Thank you for using.
        </p>
        <div className="bg-video" id="bfOver" ref={bgref}></div>
        <OpenModal />
        <button className="BtnGo">HUSEVN</button>
      </div>
    </>
  );
};

export default HeroSection;
