import React, { useEffect, useState } from "react";
import "./index.css";
import Header from "./portfolio/Header";
import About from "./portfolio/About";
import Project from "./portfolio/Project";
import Contact from "./portfolio/Contact";
import Footer from "./portfolio/Footer";
import tech from "./Image/tech.png";
import Review from "./portfolio/Review";
import Skills from "./portfolio/Skills";
import Loading from "./portfolio/Loading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header
        ownerName="Rohit Rajput"
        fileName="projects"
        contant="A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product"
      />

      <About btn="contact" />
      <Skills />

      <h1
        className="aboutme userText"
        id="project"
        style={{ textAlign: "center", marginBottom: "80px" }}
        data-aos={"zoom-in-down"}
      >
        Projects
      </h1>
      <p className="aboutinfor" data-aos={"zoom-in-down"}>
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </p>
      <div className="pro">
        <Project />
      </div>
      <Review />
      <Contact btn="contact" imgsrc={tech} />

      <Footer
        ownerName="Rohit Rajput"
        contant="A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product"
      />
    </>
  );
};
export default App;
