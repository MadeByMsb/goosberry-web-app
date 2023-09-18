import React from 'react'
import { useNavigate } from 'react-router-dom'
import './About.scss'
export default function About() {
  const navigate = useNavigate()
  return (
    <section className="about--container" id="about-section">
        <h1 className="section--title">About Us</h1>
        <p className="about">
        We, Gooseberry gift, situated at Perinthalmanna, Malappuram, Kerala, glad to introduce ourselves as one of the leading promotional and corporate gifting companies. We offer a wide range of finest quality products and corporate gifts as per your requirements. We manufacture products of outstanding quality for our clients and continuously strive to be acknowledged as a reputable source and provider of high quality products in all our specialised fields.
        </p>
        <button onClick={() => navigate("/gallery")} className="btn-gallery">View Gallery</button>
    </section>
  )
}
