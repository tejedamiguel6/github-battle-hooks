import React from 'react'

const Card = ({ header, subheader, avatar, href, name }) => {
  return (
    <div>
      <h4> {header}</h4>
      <img className='avatar' src={avatar} alt={`Avatar name fro ${name}`} />
      {subheader && <h4 className='center-text'> {subheader}</h4>}
    </div>
  )
}

export default Card
