import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll'
import './Footer.scss';

export default function Footer() {
    const navigate = useNavigate()
    let links = {
        instagram: "https://www.instagram.com/gooseberrygiftskerala/",
        linkedin: "https://www.linkedin.com/company/gooseberry-corporate-gifts-promotions",
        facebook: "https://www.facebook.com/gooseberrygiftskerala",
        twitter: "https://twitter.com/gifts_kerala"
    }
 
    const navigationHandler = (event) => {
        if(event.target.innerHTML === "Gallery"){
            navigate("/gallery")
        }else if(event.target.innerHTML === "Privacy Policy"){
            navigate("/privacy-policy")
        }else{
            navigate("/")
        }
    }
  return (
    <footer className="footer-section">
        <div className="footer-section--wrapper usefull-links">
            <h2 className="footer--title">Usefull links</h2>
            <div className="links-wrapper">
                <ul className="links first-links">
                    <li className="link" >
                        <Link to="home" onClick={navigationHandler}>Home</Link>
                    </li>
                    <li className="link" >
                        <Link to="category-section" onClick={navigationHandler}>Categories</Link>
                    </li>
                    <li className="link" onClick={navigationHandler}>Gallery</li>
                </ul>
                <ul className="links">
                    <li className="link">
                        <Link to="about-section" onClick={navigationHandler}>About us</Link>
                    </li>
                    <li className="link">
                        <Link to="contact-section" onClick={navigationHandler}>Contact Us</Link>
                    </li>
                    <li className="link">
                        <Link to="privacy-policy" onClick={navigationHandler}>Privacy Policy</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="footer-section--wrapper footer-contact">
            <h2 className="footer--title">Contact</h2>
            <ul className="links">
                <li className="link">
                    <a href="https://g.page/r/Cd2ETeH-_tcIEAE" target="_blank">Gooseberry Gift&Promotions
                    1121/27 PTM Complex, Ooty Road, Perinthalmanna
                    Malappuram dt,Kerala-679322</a>
                    <br/>
                    <a href="tel:+918089360180">+91-8089360180</a><br/>
                    <a href="mailto:gooseberrygift@gmail.com" className='footer-email'>gooseberrygift@gmail.com</a>
                </li>
            </ul>
        </div>
        <div className="footer-section--wrapper connect-section">
            <h2 className="footer--title">Connect</h2>
            <div className="connects-wrapper">
                <img src="/icons/facebook.png" onClick={()=> window.open(links.facebook)} alt="facebook" className="social--icon" />
                <img src="/icons/instagram.png" onClick={()=> window.open(links.instagram)} alt="instagram" className="social--icon" />
                <img src="/icons/twitter.png" onClick={()=> window.open(links.twitter)} alt="twitter" className="social--icon" />
                <img src="/icons/linkedin.png" onClick={()=> window.open(links.linkedin)} alt="linkedin" className="social--icon" />
            </div>
        </div>
        <small className="copyright">&copy; Copyrights 2022 - 2023.Gooseberry Branding and Communications.All Rights Reserved.</small>
    </footer>
  )
}
