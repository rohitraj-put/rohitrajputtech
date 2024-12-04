import React from "react";
import html5 from "../Image/HTML5.png";
import css3 from "../Image/CSS3.png";
import javascript from "../Image/javascript.png";
import react from "../Image/react.png";
import bootstrap from "../Image/Bootstrap.png";
import tailwind from "../Image/Tailwind.png";
import MUI from "../Image/MUI.png";
import sass from "../Image/Sass.png";
import git from "../Image/git.png";
import redux from "../Image/redux.png";
import firebase from "../Image/firebase.webp";

function Skills() {
  // Array of skill data including images and URLs
  const skillData = [
    { img: html5, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { img: css3, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    {
      img: javascript,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { img: react, url: "https://reactjs.org/" },
    { img: firebase, url: "https://firebase.google.com/" },
    { img: bootstrap, url: "https://getbootstrap.com/" },
    { img: tailwind, url: "https://tailwindcss.com/" },
    { img: MUI, url: "https://mui.com/" },
    { img: sass, url: "https://sass-lang.com/" },
    { img: redux, url: "https://redux.js.org/" },
    { img: git, url: "https://git-scm.com/" },
  ];

  return (
    <>
      <h1
        className="aboutme userText"
        id="skill"
        style={{ textAlign: "center", marginBottom: "80px" }}
        data-aos={"zoom-in-down"}
      >
        Skills
      </h1>

      <div className="Skill_sec">
        {skillData.map((skill, index) => (
          <div className="skills_box" key={index}>
            <a href={skill.url} target="_blank" rel="noopener noreferrer">
              <img
                src={skill.img}
                alt="Skill_Image"
                data-aos={"zoom-in-right"}
              />
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
