const PlayerPreview = ({ username, handleReset, playerData }) => {
  return (
    <div>
      <img
        src={`https://github.com/${username}.png?size=200`}
        alt={`Avatar for ${username}`}
      />
      <h3>{username}</h3>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default PlayerPreview
