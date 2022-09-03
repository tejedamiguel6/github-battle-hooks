import GridRepos from './GridRepos'

const Popular = ({ repos, loading }) => {
  console.log('repos', repos)
  return (
    <div>
      {loading && <h1>Loading....</h1>}

      <ul className='repoGrid'>
        {repos?.map((repo, index) => {
          const { id, name, stargazers_count, score, owner } = repo
          const { avatar_url, type } = owner
          return (
            <div>
              <li key={id}>
                <GridRepos
                  avatar_url={avatar_url}
                  name={name}
                  stargazers_count={stargazers_count}
                  score={score}
                >
                  <p>all of this would be considred children</p>
                </GridRepos>
              </li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Popular
