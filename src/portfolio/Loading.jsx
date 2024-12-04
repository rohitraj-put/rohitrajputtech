import React from "react";
import "./loading.css";

function Loading() {
  return (
    <>
      <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-title">Rohit Rajput...</div>
          <div className="terminal-controls">
            <div className="control close" />
            <div className="control minimize" />
            <div className="control maximize" />
          </div>
        </div>
        <div className="text">Loading...</div>
      </div>
    </>
  );
}

export default Loading;
