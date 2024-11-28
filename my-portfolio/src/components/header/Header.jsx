import React from "react";
import "./header.css";
import HeaderButtonWrapper from "../headerButtonWrapper/HeaderButtonWrapper";
import me from "../../assets/me.png";
import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <div id="home" className="sub-container">
      <h2>Hello, I'm</h2>
      <h1 className="text-title">Nitin Malik</h1>

      <h3 className="text-light">
        <Typewriter
          options={{
            strings: ["Frontend Developer", "Backend Developer", "Full-Stack Developer","Software Developer"],
            autoStart: true,
            loop: true,
          }}
        /> 
      </h3>

      <HeaderButtonWrapper />
    </div>
  );
}
