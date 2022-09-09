import { useState, useEffect } from 'react'
import Instructions from './Instructions'
import PlayerInput from './PlayerInput'

import PlayerPreview from './PlayerPreview'
import { battle } from '../utils/api'
import { Link } from 'react-router-dom'
import Results from '../components/Results'
const Battle = () => {
  const [playerOne, setPlayerOne] = useState(null)
  const [playerTwo, setPlayerTwo] = useState(null)
  // const [playerData, setPlayerData] = useState([])

  useEffect(() => {
    // getProfile('tejedamiguel6')
  }, [])

  const handleSubmit = (id, player) => {
    id === 'playerOne' ? setPlayerOne(player) : setPlayerTwo(player)
  }

  const handleReset = (id) => {
    id === 'playerOne' && setPlayerOne(null)
    id === 'playerTwo' && setPlayerTwo(null)
  }

  const handleBattle = () => {
    battle([playerOne, playerTwo]).then((res) =>
      console.log(res[0], res[1], 'what is this')
    )
  }

  return (
    <div>
      <Instructions />
      <div className='PlayerInput-flex'>
        {playerOne === null ? (
          <PlayerInput
            onSubmit={(player) => handleSubmit('playerOne', player)}
            label='Player one'
          />
        ) : (
          <PlayerPreview
            username={playerOne}
            // playerData={playerData}
            handleReset={() => handleReset('playerOne')}
          />
        )}
        {playerTwo === null ? (
          <PlayerInput
            onSubmit={(player) => handleSubmit('playerTwo', player)}
            label='Player two'
          />
        ) : (
          <PlayerPreview
            username={playerTwo}
            // playerData={playerData}
            handleReset={() => handleReset('playerTwo')}
          />
        )}
      </div>
      {playerOne && playerTwo !== null && (
        <div className='battle-btn' onClick={{ handleBattle }}>
          <Link
            to={{
              pathname: '/battle/results',
              search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`,
            }}
          >
            Battle!!
          </Link>
        </div>
      )}
    </div>
  )
}

export default Battle
