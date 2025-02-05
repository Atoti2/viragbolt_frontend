import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div id="nyito">
    <Header/>
		<main>        
			<Link to={"/products"}>Válasszon vetőmagjainkból!</Link>
		</main>
		<Footer/>
	</div>
  )
}

export default Home