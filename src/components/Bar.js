import React from "react";
import "../App.css";
function Bar({ value }) {
  return (
    <div>
      {value}
      <div className="Bar" style={{ height: value * 5 }}></div>
    </div>
  );
}

export default Bar;
