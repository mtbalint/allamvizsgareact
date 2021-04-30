import React from "react";
import "../App.css";
import { useState } from "react";
function Team(props) {
  const [show, setShow] = useState(false);

  function clickHandler() {
    setShow(!show);
  }
  let teamplayers = props.item.franchisePlayers;

  return (
    <div className="team">
      <div>
        <p>
          <strong>{props.item.name}</strong>
        </p>
        <p>{props.item.stadium}</p>

        {show ? (
          <>
            <button onClick={clickHandler}>Show less</button>
            {teamplayers.map((player, index) => (
              <div>
                <p>{player.name}</p>
              </div>
            ))}
          </>
        ) : (
          <button onClick={clickHandler}>show more</button>
        )}
      </div>
    </div>
  );
}

export default Team;
