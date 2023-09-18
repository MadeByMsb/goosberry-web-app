import React, { lazy, Suspense, useEffect } from 'react'
// import About from '../About/About'
import Banner from '../Banner/Banner'
// import Categories from '../Categories/Categories'
import Contact from '../Contact /Contact'
// import Customers from '../Customers/Customers'

const Customers = lazy(() => import("../Customers/Customers"))
const Categories = lazy(() => import("../Categories/Categories"))
const About = lazy(() => import("../About/About"))

export default function Home() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <main className="home">
        <Banner/>
        <Suspense fallback={<h1></h1>}>
          <Categories/>
          <About/>
          <Customers/>
        </Suspense>
        <Contact/>
    </main>
  )
}
