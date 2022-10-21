import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const [showNav, setShowNAv] = useState(false);

  const handleClick = () => {
    setShowNAv(!showNav)

  }

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showNav) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showNav]);

  return (
    <>
      <nav>
        <div className='nav-center'>
          <div className='nav-header'>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>  
            <button className='nav-toggle' onClick={handleClick}>
              <FaBars />
            </button>
          </div>
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
            {links.map((item)=>{
                return <li key={item.id}><a href={item.url}>{item.text}</a></li>
              })}
            </ul>
          </div>
          <ul className="social-icons">
            {social.map((icon)=>{
              return <li key={icon.id}><a href={icon.url}>{icon.icon}</a></li>
            })}
          </ul>
        </div>
      </nav>
    </>
    )
}

export default Navbar
