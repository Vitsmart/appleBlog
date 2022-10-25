import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './context/authContext'

export default function Navbar() {
 // const {currentUser, logout} = useContext(AuthContext);
 let user = true
  return (
    <div className='navbar'>
        <div className='container'>
          <Link className='link' to="/">
            <div className='logo'>APPLEBLOG</div>
            </Link>
            <div className='links'>
                <Link className='link' to="/?cat=art"><h6>Art</h6></Link>
                <Link className='link' to="/?cat=science"><h6>Science</h6></Link>
                <Link className='link' to="/?cat=technology"><h6>Technology</h6></Link>
                <Link className='link' to="/?cat=entertainment"><h6>Entertainment</h6></Link>
                <Link className='link' to="/?cat=design"><h6>Design</h6></Link>
                <Link className='link' to="/?cat=food"><h6>Food</h6></Link>
                <span>{user?.username}</span>
                {user ? (<span onClick={[]}>Logout</span>)
                 : (<Link className='link' to="/login">Login</Link>)
                 }
                <span className='write'><Link className="link" to="/write">Write</Link></span>
            </div>
        </div>
    </div>
  )
}
