import { lazy,Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { EssentialProvider } from './Assets/context';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
// import Products from './components/Product page/Products';
const Products = lazy(() => import("./components/Product page/Products"))
function App() {
  return (
    <EssentialProvider>
      <Router>
        <Header/>
        <Suspense fallback={<div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:category" element={<Products/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
          </Routes>
        </Suspense>
        <Footer/>
      </Router>
    </EssentialProvider>
  );
}

export default App;
