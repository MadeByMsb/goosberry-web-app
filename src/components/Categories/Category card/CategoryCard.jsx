import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './CategoryCard.scss';

export default function CategoryCard({data:{image,category,link}}) {
  const navigate = useNavigate()
  return (
    <div className="category-card" onClick={() => navigate('/products/'+link)}>
        <LazyLoadImage src={`/images/${image}`} alt="" className="category--image" />
        <strong className="category--title">{category}</strong>
    </div>
  )
}
