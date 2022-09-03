import { useState, useEffect } from 'react'

const PlayerInput = ({ label, onSubmit }) => {
  const [username, setUsername] = useState('')

  const handleChange = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('you submit', username)
    onSubmit(username)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username' className='player-label'>
          {label}
        </label>

        <div className='row-player-input'>
          <input
            type='text'
            id='username'
            placeholder='enter github username'
            className='input'
            autoComplete='false'
            value={username}
            onChange={handleChange}
          />
        </div>

        <button type='submit' className='submit' disabled={!username}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default PlayerInput
