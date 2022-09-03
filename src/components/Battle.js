import { useState, useEffect } from 'react'
import Instructions from './Instructions'
import PlayerInput from './PlayerInput'

// import { getProfile } from '../utils/api'
import PlayerPreview from './PlayerPreview'

const Battle = () => {
  const [playerOne, setPlayerOne] = useState(null)
  const [playerTwo, setPlayerTwo] = useState(null)
  // const [playerData, setPlayerData] = useState([])

  useEffect(() => {
    // getProfile('tejedamiguel6')
  }, [])

  const handleSubmit = (id, player) => {
    id === 'playerOne' ? setPlayerOne(player) : setPlayerTwo(player)

    // getProfile(player).then((data) => setPlayerData(data, 'this is poop'))
    // getProfile('charliekwallin')
  }

  const handleReset = (id) => {
    id === 'playerOne' && setPlayerOne(null)
    id === 'playerTwo' && setPlayerTwo(null)
  }

  return (
    <div>
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
    </div>
  )
}

export default Battle
