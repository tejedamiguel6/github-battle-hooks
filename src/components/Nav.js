import { NavLink } from 'react-router-dom'

const activeStyle = {
  color: 'red',
}

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' activeClassName={activeStyle}>
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink to='/battle' activeClassName={activeStyle}>
            Battle
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
