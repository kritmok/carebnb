import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div>
      <div className="hero-container" id="hero">
        <video src="/videos/video.mp4" autoPlay loop muted />
        <p>Life is</p>
        <h1>Exploration</h1>

        <div>
          <a href="#cardsection">
            <button className="hero-btn">EXPLORE NOW</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
