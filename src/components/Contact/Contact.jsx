import React, { useRef, useState } from 'react'
import Loading from '../Loading/Loading';
import './Contact.scss'
export default function Contact() {
    const submitForm = useRef(null);
    const [loading,setLoading] = useState(false)
    const [formData,setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    })

    const handleFormData = (event) => {
        setFormData({...formData,[event.target.name]:event.target.value})
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setLoading(true)
        console.log(formData);
        let scriptEndPoint = "https://script.google.com/macros/s/AKfycbzIb70sDZXHb86hmxyvagvTtQxnvz_BB8zXE2CsNR2fxWPH9R3cf7dmlhrMwG8jLKtf/exec";
        let scriptForEmail = "https://script.google.com/macros/s/AKfycbzCG78dhR2D1HxTM5AXz9bQa5_SZRj_tYRjpsOxD55pVlg08pSCgoDQBtQ30TMwlAtB/exec"
        fetch(scriptEndPoint,{
            method: "POST",
            body: new FormData(submitForm.current)
        })
        .then(res => {
        }).catch(err => {
            console.log(err);
        })

        fetch(scriptForEmail,{
            method: "POST",
            body: new FormData(submitForm.current)
        })
        .then(res => {
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: ""
            })
            setLoading(false)
        }).catch(err => {
            console.log(err);
        })
    } 
  return (
    <section className="contact-section" id="contact-section">
        <div className="get-in-touch--wrapper" style={{backgroundImage: `url('/images/contact.png')`}}>
            <h1 className="section--title">Get IN Touch</h1>
            <div className="detail">
                <img src="/icons/location.png" alt="" className="detail--icon" />
                <div className="detail-content">
                    <h6 className="detail--title">Our Office Address</h6>
                    <a href='' className="detail--content">1121/27 PTM Complex, Ooty Road, Perinthalmanna Malappuram dt,Kerala 679322</a>
                </div>
            </div>
            <div className="detail">
                <img src="/icons/email.png" alt="" className="detail--icon" />
                <div className="detail-content">
                    <h6 className="detail--title">General Enquiries</h6>
                    <a href='mailto:gooseberrygift@gmail.com' className="detail--content">gooseberrygift@gmail.com</a>
                </div>
            </div>
            <div className="detail">
                <img src="/icons/call.png" alt="" className="detail--icon" />
                <div className="detail-content">
                    <h6 className="detail--title">Call Us</h6>
                    <p className="detail--content">
                        <a href="tel:+918089360180">+91-8089360180</a>
                        <br/>
                        <a href="tel:+917034454111">+91-7034454111</a>
                        </p>
                </div>
            </div>
            <div className="detail">
                <img src="/icons/timer.png" alt="" className="detail--icon" />
                <div className="detail-content">
                    <h6 className="detail--title">Our Timing</h6>
                    <p className="detail--content">Our Timing Mon - Sat : 09:00 AM - 07:00 PM <br/>Sun : Closed</p>
                </div>
            </div>
        </div>

        <form className="contact--form" onSubmit={handleFormSubmit} ref={submitForm}>
            <div className="input-wrapper">
                <input type="text" placeholder="Firstname" className="field" name='firstName' value={formData.firstName} onChange={handleFormData}/>
                <input type="text" placeholder="Lastname" className="field" name='lastName' value={formData.lastName} onChange={handleFormData}/>
            </div>
            <div className="input-wrapper">
                <input type="email" placeholder="Email" className="field" name='email' value={formData.email} onChange={handleFormData}/>
                <input type="text" placeholder="Phone" className="field" name='phone'  value={formData.phone} onChange={handleFormData}/>
            </div>
            <textarea name="message" placeholder='Message...' cols="30" rows="10" className="field" value={formData.message} onChange={(event)=>setFormData({...formData,message:event.target.value})}></textarea>
            <div className="btn-wrapper">
                <button className="btn-submit">Submit</button>
            </div>
        </form>
        {
            loading&&
            <Loading/>
        }
    </section>
  )
}
