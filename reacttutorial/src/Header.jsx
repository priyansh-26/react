import React from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <ul class='nav'>
        <li>
            {/* <a href="/">Home</a> */}
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            {/* <a href="/contact">Contact</a> */}
            <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
            {/* <a href="/about">About</a> */}
            <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  )
}
