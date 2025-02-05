import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      	<header>
          <Link to={"/"}><img src="./sunflower.jpg" alt="fa" id="logo" /></Link>
          <h1>Nevenincs Bt.</h1>
          <h2>Vetőmagok - Mindenféle, minden mennyiségben</h2>
      </header>
    </div>
  )
}

export default Header
