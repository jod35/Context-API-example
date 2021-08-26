import React from 'react'
import {Link} from 'react-router-dom'


const NavBar=()=>{
    return (
        <div className="navbar">
            <Link to='/'>Notes</Link>
            <Link to='/list'>List</Link>
        </div>
    )
}


export default NavBar
