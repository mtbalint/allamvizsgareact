import React from "react";
import "../App.css";
import { useState } from "react";
function Team(props) {
  const [show, setShow] = useState(false);

  function clickHandler() {
    setShow(!show);
  }

  return (
    <div className="team">
      <div>
        <p>{props.item.name}</p>
        <p>{props.item.stadium}</p>

        {show ? (
          <>
            <p>
              <button onClick={clickHandler}>Show less</button>
            </p>
            <div>
              {props.item.stadium} ({props.item.stadium})<br />
            </div>
          </>
        ) : (
          <button onClick={clickHandler}>show more</button>
        )}
      </div>
    </div>
  );
}

export default Team;
