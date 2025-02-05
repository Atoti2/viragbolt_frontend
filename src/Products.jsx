import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { getFlowers } from './utils'
import { Link } from 'react-router-dom'
const url = "http://localhost:8000/api/flowers"

const Products = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    getFlowers(url, setProducts)
  }, [])
  console.log(products);
  
  return (
    <>
      <Header/>
        <main className="container">  
          <div className="row">
          <h2>Vetőmagjaink:</h2>
            {products && (
              products.map((flower) => 
                <div key={flower.id} className="col-lg-4 mt-4 arukep">
                  <h4>{flower.nev}</h4>
                  <Link to={`/order/${flower.id}`}>	
                  <img src={flower.kepUrl} alt={flower.leiras} className='img-fluid' />
                </Link>
              </div>
              )
            )}
          </div>      
        </main>
      <Footer/>
    </>
  )
}

export default Products