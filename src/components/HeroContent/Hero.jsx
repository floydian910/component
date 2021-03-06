import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
const Hero = ({ language }) => {
  return (
    <div className="hero_content">
      <section>
        {language ? (
          <h1 style={{color: "orange"}}>#<strong>
          Relax
          </strong> 
        </h1>
        ) : (
          <h1 style={{color: "orange"}}>#<strong>
            მოკალათდი
            </strong> 
          </h1>
        )}
      </section>
      {/* <Link className="hero_btn_contact" to="/contact">
        {language ? "CONTACT US" : "დაგვიკავშირდი"}
      </Link> */}
    </div>
  );
};

export default Hero;
