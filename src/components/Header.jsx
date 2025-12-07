import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["intro", "tech", "career", "project", "study"];
      let current = "intro";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header-colors">
          <span className="color-dot color1"></span>
          <span className="color-dot color2"></span>
          <span className="color-dot color3"></span>
        </div>

        <nav className="nav-menu">
          <a href="#intro" className={activeSection === "intro" ? "active" : ""}>
            소개
          </a>
          <a href="#tech" className={activeSection === "tech" ? "active" : ""}>
            기술
          </a>
          <a
            href="#career"
            className={activeSection === "career" ? "active" : ""}
          >
            경력
          </a>
          <a
            href="#project"
            className={activeSection === "project" ? "active" : ""}
          >
            프로젝트
          </a>
          <a href="#study" className={activeSection === "study" ? "active" : ""}>
            교육
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
