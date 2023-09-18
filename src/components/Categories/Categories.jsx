import React from 'react';
import './Categories.scss';
import categoryCollection from '../../dbCollections/categoryCollection'
import CategoryCard from './Category card/CategoryCard';
export default function Categories() {
  return (
    <section className="categories-section" id="category-section">
        <h1 className="section--title">Categories</h1>
        <div className="cards-wrapper">
          {
              categoryCollection.map((item,index) => (
                  <CategoryCard data={item} key={index}/>
              ))
          }
        </div>
    </section>
  )
}
