import React from "react";
import pauseIcon from "../images/pattern-divider-mobile.svg";
import diceIcon from "../images/icon-dice.svg";

const Homepage = (props) => {
  return (
    <div>
      <div className="container">
        {/* <p>{props.result.slip.id}</p> */}
        <p className="id-number">ADVICE#{props.adviceData.slip.id}</p>
        <p className="advice">{props.adviceData.slip.advice}</p>
        <img className="pause" src={pauseIcon} alt="" />
        <div className="parent">
          <div className="div"></div>
          <img className="diceIcon" src={diceIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
