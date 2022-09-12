import { useState, useEffect } from 'react'
import Card from './Card'
import { useSearchParams } from 'react-router-dom'
import { battle } from '../utils/api'

const Results = () => {
  const [searchParams] = useSearchParams()

  const [winner, setWinner] = useState(null)
  const [loser, setLoser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const players = Object.fromEntries([...searchParams])
    const { playerOne, playerTwo } = players

    battle([playerOne, playerTwo])
      .then((res) => ({
        winner: setWinner(res[0]),
        loser: setLoser(res[1]),
        laoding: setLoading(false),
      }))
      .catch((error) => ({
        error: setError(error),
      }))
  }, [])

  if (loading) {
    return <h1>Loading</h1>
  }

  return (
    <>
      <h1>RESULTS</h1>

      <Card
        header={winner.score === loser.score ? 'TIE!' : 'Winner'}
        subheader={`Score: ${winner.score.toLocaleString()}`}
        avatar={winner.profile.avatar_url}
        href={winner.profile.html_url}
        name={winner.profile.login}
      />

      <Card
        header={winner.score === loser.score ? 'TIE!' : 'Winner'}
        subheader={`Score: ${loser.score.toLocaleString()}`}
        avatar={loser.profile.avatar_url}
      />

      {/* <p>{JSON.stringify(winner)}</p>
      <p>{JSON.stringify(loser)}</p> */}
    </>
  )
}

export default Results
