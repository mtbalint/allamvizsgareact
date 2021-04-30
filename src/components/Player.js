function Player({ player }) {
  function handleClick() {}
  return (
    <div className="player">
      <p>
        {player.name} - <button onClick={() => handleClick()}>Vote</button>
      </p>
    </div>
  );
}

export default Player;
