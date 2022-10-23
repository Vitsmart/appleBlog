import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>APPLEBLOG</div>
            <div className='links'>
                <Link className='link' to="/?cat=art"><h6>Art</h6></Link>
                <Link className='link' to="/?cat=science"><h6>Science</h6></Link>
                <Link className='link' to="/?cat=technology"><h6>Technology</h6></Link>
                <Link className='link' to="/?cat=entertainment"><h6>Entertainment</h6></Link>
                <Link className='link' to="/?cat=design"><h6>Design</h6></Link>
                <Link className='link' to="/?cat=food"><h6>Food</h6></Link>
                <span>john</span>
                <span>Logout</span>
                <span className='write'><Link className="link" to="/write">Write</Link></span>
            </div>
        </div>
    </div>
  )
}
