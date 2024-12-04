import React from "react";

const Review = () => {
  let feedNames = [
    {
      imgsrc: "https://gogil.aimcomely.com/webassets/images/user.png",
      contant:
        "Rohit is an outstanding frontend developer whose technical skills, attention to detail, and collaborative spirit greatly contribute to the success of our team. I highly recommend them for any future projects or opportunities.",
      uname: ".....Yatin Yadav",
    },
    {
      imgsrc: "https://gogil.aimcomely.com/webassets/images/user.png",
      contant:
        "Additionally, Rohit is committed to their professional development. They actively pursue new learning opportunities and stay up-to-date with the latest industry trends. This commitment is evident in the innovative solutions they bring to our projects.",
      uname: ".....Aaditya",
    },
    {
      imgsrc: "https://gogil.aimcomely.com/webassets/images/user.png",
      contant:
        "standout qualities is their meticulous attention to detail. They ensure that every user interface they design is pixel-perfect and functions flawlessly across various devices and browsers. Their code is always clean, maintainable, and well-documented, which significantly enhances our team’s efficiency and project maintainability.",
      uname: ".....Nitish",
    },
  ];

  let feedback = feedNames.map((feedName, index) => (
    <div className="card-3" data-aos="flip-up" key={index}>
      <p className="reviewuser">
        <q>{feedName.contant}</q>
      </p>
      <p
        style={{
          paddingLeft: "100px",
          color: "rgb(120, 67, 233)",
          fontSize: "20px",
        }}
      >
        {feedName.uname}
      </p>
      <div className="profile">
        <img src={feedName.imgsrc} alt="img" />
      </div>
    </div>
  ));
  return (
    <>
      <h1 className="aboutme userText">What Our Users Say</h1>
      <div className="review">{feedback}</div>
    </>
  );
};

export default Review;
