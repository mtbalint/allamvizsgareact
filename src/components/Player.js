function Player({ player }) {
  function handleClick() {}
  return (
    <div className="player">
      <p>
        {player.name} - Voted:{" "}
        <button onClick={() => handleClick()}>Vote</button>
      </p>
    </div>
  );
}

export default Player;
