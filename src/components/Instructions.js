import { useState, useEffect } from 'react'
import {
  FaUserFriends,
  FaFighterJet,
  FaTrophy,
  FaTimesCircle,
} from 'react-icons/fa'
import PlayerInput from './PlayerInput'

const Instructions = () => {
  return (
    <>
      <div>
        <div className='instructions-container'>
          <h1 className='center-text header-lg'>Instructions</h1>
          <ol className='container-sm-grid-center-text Instructions-instructions'>
            <li>
              <h3 className='header-sm'>Enter two GitHub Users</h3>
              <FaUserFriends color='rgb(255, 191, 116)' size={140} />
            </li>
            <li>
              <h3 className='header-sm'>Battle</h3>
              <FaFighterJet color='#727272' size={140} />
            </li>
            <li>
              <h3 className='header-sm'>See the Winners</h3>
              <FaTrophy color='rgb(255, 215, 0)' size={140} />
            </li>
          </ol>
        </div>
      </div>
    </>
  )
}

export default Instructions
