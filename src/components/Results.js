import { useState, useEffect } from 'react'
import { battle } from '../utils/api'

const Results = (props) => {
  const [winner, setWinner] = useState(null)
  const [loser, setLoser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  console.log(props, 'lol')

  useEffect(() => {}, [])

  const handleBattle = () => {
    // battle([playerOne, playerTwo]).then((res) =>
    //   console.log(res[0], res[1], 'what is this')
    // )
  }
  return (
    <div>
      <h1>REsults</h1>
    </div>
  )
}

export default Results
