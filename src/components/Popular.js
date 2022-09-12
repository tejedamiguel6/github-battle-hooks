import GridRepos from './GridRepos'
import LanguagesNav from './LanguagesNav'

const Popular = ({ repos, loading, selected, onUpdateLanguage }) => {
  console.log('repos', repos)
  return (
    <div>
      <LanguagesNav selected={selected} onUpdateLanguage={onUpdateLanguage} />
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
                />
              </li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Popular
