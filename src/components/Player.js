import React, { useState } from "react";

function Player({ player }) {
  const [buttonText, setButtonText] = useState(player.isVoted.toString());

  function myFetch() {
    setButtonText("...");

    fetch("api/vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: player.id, isVoted: !player.isVoted }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) player.isVoted = !player.isVoted;
        setButtonText(player.isVoted.toString());
      });
  }

  function handleClick() {
    setButtonText(false);
    myFetch();
  }

  return (
    <div className="player">
      <p>
        {player.name} - Voted:{" "}
        <button onClick={() => handleClick()}>{buttonText}</button>
      </p>
    </div>
  );
}

export default Player;
