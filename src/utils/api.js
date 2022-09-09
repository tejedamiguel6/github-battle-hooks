const id = 'YOUR_CLIENT_ID'
const sec = 'YOUR_SECRET_ID'
const params = `?client_id${id}&client_secret=${sec}`

export const fetchPopularRepos = (language) => {
  const endpoint = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  )

  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      if (!data.items) {
        throw new Error(data.message)
      }

      return data.items
    })
}

const getProfile = (userName) => {
  return fetch(`https://api.github.com/users/${userName}${params}`)
    .then((res) => res.json())
    .then((profile) => {
      if (profile.message) {
        throw new Error('error on message')
      }
      return profile
    })
}

const getRepos = (username) => {
  return fetch(
    `https://api.github.com/users/${username}/repos${params}&per_page=100`
  )
    .then((res) => res.json())
    .then((repos) => {
      if (repos.message) {
        throw new Error(`No repos found for user ${username}`)
      }
      return repos
    })
}

const getStarCount = (repos) => {
  return repos.reduce(
    (count, { stargazers_count }) => count + stargazers_count,
    0
  )
}

const calculateScore = (followers, repos) => {
  return followers * 3 + getStarCount(repos)
}

const getUserData = (player) => {
  return Promise.all([getProfile(player), getRepos(player)]).then(
    ([profile, repos]) => ({
      profile,
      score: calculateScore(profile.followers, repos),
    })
  )
}

const sortPlayer = (players) => {
  return players.sort((a, b) => b.score - a.score)
}

export const battle = (player) => {
  return Promise.all([getUserData(player[0]), getUserData(player[1])]).then(
    (results) => sortPlayer(results)
  )
}
