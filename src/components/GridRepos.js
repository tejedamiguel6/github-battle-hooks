const GridRepos = ({ avatar_url, name, score, stargazers_count, children }) => {
  return (
    <div>
      <img src={avatar_url} alt={name} />
      <p className='name'>{name}</p>
      <span>Stargazers Count: {stargazers_count}</span>
      <p>Score: {score}</p>
      {children}
    </div>
  )
}

export default GridRepos
