import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { battle } from '../utils/api'

const Results = () => {
  const [searchParams] = useSearchParams()
  const players = Object.fromEntries([...searchParams])

  const { playerOne, playerTwo } = players

  const [winner, setWinner] = useState(null)
  const [loser, setLoser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    battle([playerOne, playerTwo])
      .then((res) => ({
        winner: setWinner(res[0]),
        loser: setLoser(res[1]),
        error: setError(null),
        loading: setLoading(false),
      }))
      .catch((error) => ({
        error: setError(error),
        loading: setLoading(false),
      }))
  }, [playerOne, playerTwo])

  return (
    <div>
      <h1>RESULTS</h1>
      {loading && <h1>LOADING</h1>}

      <p>{JSON.stringify(winner)}</p>
      <p>{JSON.stringify(loser)}</p>
    </div>
  )
}

export default Results
