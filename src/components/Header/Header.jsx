import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll'
import './Header.scss'

export default function Header() {
  const naviagator = useRef(null)
  const hamburgerRef = useRef(null);
  const navigate = useNavigate()

  const openNav = (event) => {
    hamburgerRef.current.classList.toggle('hamburger-close')
    naviagator.current.classList.toggle("navigation--active")
    if(event.target.innerHTML !== 'Gallery'){
      navigate('/')
    }
  }
  return (
    <header className="main--header">
        <p onClick={()=> navigate("/")}>
            <img src="/images/logo.png" className='logo' alt="Gooseberry" />
        </p>
        <ul className="header-navigation" ref={naviagator}>
            <li className="navigation">
              <Link to="home" onClick={openNav}>Home</Link>
            </li>
            <li className="navigation">
              <Link to="category-section" onClick={openNav}>Category</Link>
            </li>
            <li className="navigation">
              <Link to="about-section" onClick={openNav}>About</Link>
            </li>
            <li className='navigation'>
              <span onClick={(event) => {
                openNav(event);
                navigate("/gallery")
              }}>Gallery</span>
            </li>
            <li className="navigation">
              <Link to="contact-section" onClick={openNav}>Contact Us</Link>
            </li>
            
        </ul>
        <div className="hamburger" ref={hamburgerRef} onClick={openNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
    </header>
  )
}
