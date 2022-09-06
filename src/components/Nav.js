import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/'}>Popular</Link>
        </li>
        <li>
          <Link to={'/battle'}>Battle</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
