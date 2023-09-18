import React, { useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './Gallery.scss'

export default function Gallery() {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
  return (
    <main className="gallery">
        <div className="gallery-header">
            <h1 className="heading">Gallery</h1>
            <p className="description">We’re always enthusiastic to show these to you! Kindly have a look on the products we had already delivered to various brands.</p>
        </div>
        <div className="gallery-items-wrapper">
            {
                [...Array(42)].map((item,index) => (
                    <div className="card-wrapper" key={index}>
                        <LazyLoadImage 
                            width={"100%"}
                            height={"100%"}
                            className="gallery-item"
                            src={`/gallery/gallery ${index+1}.jpeg`}
                        />
                    </div>
                ))
            }
        </div>
    </main>
  )
}
