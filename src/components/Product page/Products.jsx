import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'
import './Products.scss'
import products from '../../dbCollections/products.json';

export default function Products() {
    const {category} = useParams();
    const [location,setLocation] = useState("")

    useEffect(() => {
        window.scrollTo(0,0)
        console.log(category);
        let product = products.filter(item => item.category === category)
        console.log(product[0]);
        setLocation(product[0])
    },[])
  return (
    <main className="products-wrapper">
        <div className="products-landing">
           <div className="products-item">
            <img src={"/products/"+location.category+"/landing.png"} className='product-banner' alt="" />
            <h5 className="product-content" style={{color:location.color}}>
                {location.text}
            </h5>
           </div>
        </div>

        <div className="products-card-wrapper">
            {
                [...Array(location.images)].map((item,index) => (
                    <div className="card">
                        <img src={"/products/"+location.category+"/product "+index+".png"} className='card-thumbnail' alt="" />
                    </div>
                ))
            }
        </div>
    </main>
  )
}
