import React, { Fragment, useContext, useEffect, useRef } from "react";
import BannerItem from "./Banner item/BannerItem";
import bannerCollection from "../../dbCollections/bannerCollection";
import "./Banner.scss";
import { essentialContext } from "../../Assets/context";
import { useNavigate } from "react-router-dom";

export default function Banner() {
    const slider = useRef(null);
    const indexRef = useRef(null);
    const bannerRef = useRef(null)
    const dotWrapperRef = useRef(null);
    const [cardIndex, setCardIndex] = useContext(essentialContext);
    const navigate = useNavigate()
    let mobileCardIndex = 1
    let slideInterval;
    useEffect(() => {
        slider.current.style.transition = "all 0.3s ease"
        let previousIndex = indexRef.current;
        indexRef.current = cardIndex;
        
        setMobileSlider();
        slideInterval = setInterval(() => {
            mobileCardIndex++;
            moveDots(1)
            slideMobileBanner()
        },5000)
        

    }, [cardIndex])

    const setMobileSlider = () => {
        let startPos;
        
        slider.current.addEventListener("touchstart", (event) => {
            event = event || window.event;
            event.preventDefault();
            if(event.target.className === "btn-view"){
                navigate(`/products/${event.target.id}`)
            }
            startPos = event.touches[0].clientX
            clearInterval(slideInterval);
        },true)

        slider.current.addEventListener("mousedown",(event) => {
            event = event || window.event;
            event.preventDefault();
            if(event.target.className === "btn-view"){
                navigate(`/products/${event.target.id}`)
            }
            startPos = event.clientX
            clearInterval(slideInterval);
            bannerRef.current.style.cursor = "grabbing"
        })

        slider.current.addEventListener("mouseup",(event) => {
            event = event || window.event;
            event.preventDefault();
            if ((startPos - event.clientX) > 50) {
                mobileCardIndex++;
                moveDots(1)
            } else if ((startPos - event.clientX) < -50) {
                mobileCardIndex--;
                moveDots(-1)
            }
            bannerRef.current.style.cursor = "grab"
            slideMobileBanner();
            slideInterval = setInterval(() => {
                mobileCardIndex++;
                slideMobileBanner()
            },5000)
        })

        slider.current.addEventListener("touchend", (event) => {
            event = event || window.event;
            event.preventDefault();
            if ((startPos - event.changedTouches[0].clientX) > 50) {
                mobileCardIndex++;
            } else if ((startPos - event.changedTouches[0].clientX) < -50) {
                mobileCardIndex--;
            }
            slideMobileBanner();
            slideInterval = setInterval(() => {
                mobileCardIndex++;
                slideMobileBanner()
            },5000)
        },true)

        
    }

    const slideMobileBanner = () => {
        slider.current.style.transition = "all 0.3s ease"
        slider.current.style.marginLeft = `-${mobileCardIndex * 100}%`;
        if(mobileCardIndex <= 0){
            setTimeout(()=>{
                slider.current.style.transition = 'none'
                slider.current.style.marginLeft = '-1200%'
                mobileCardIndex = 12
            },300)
        }else if(mobileCardIndex >= 13){
            setTimeout(()=>{
                slider.current.style.transition = 'none'
                slider.current.style.marginLeft = '-100%'
                mobileCardIndex = 1
            },300)
        }
    }

    const slideHandler = (direction) => {
        clearInterval(slideInterval);
        if(direction === 1){
            mobileCardIndex++;
            slideMobileBanner();
        }else{
            mobileCardIndex--;
            slideMobileBanner();
        }
        moveDots(direction);
        slideInterval = setInterval(() => {
            mobileCardIndex++;
            slideMobileBanner()
        },5000)
    }

    const moveDots = (direction) => {
        let activeDot = document.querySelector(".dot--active")
        dotWrapperRef.current.style.transition = "transform 0.3s ease"
        activeDot.classList.remove("dot--active")
        if(direction === 1){
            activeDot.nextSibling.classList.add("dot--active")
            dotWrapperRef.current.style.transform = "translateX(-3.8rem)"
        }else{
            activeDot.previousSibling.classList.add("dot--active")
            dotWrapperRef.current.style.transform = "translateX(0)"
        }
        setTimeout(() => {
            dotWrapperRef.current.style.transition = "none"
            dotWrapperRef.current.style.transform = "translateX(-1.9rem)"
            document.querySelector(".dot--active").classList.remove("dot--active")
            activeDot.classList.add("dot--active")
        },300)
    }
    return (
        <section className="banner--container" ref={bannerRef} id="home">
            <div className="action-wrapper">
                <img src="/icons/action call.png" onClick={()=> window.open("tel:+917034454111")} alt="" />
                <img src="/icons/action whatsapp.png" onClick={()=> {
                    window.open("https://wa.me/+917034454111")
                }} alt="" />
            </div>
            <div className="wrapper-for-slide">
                <div className="banner--wrapper">
                    <div className="banner--slider" ref={slider}>
                        <>
                            <BannerItem data={bannerCollection[bannerCollection.length - 1]}/>
                            {bannerCollection.map((item, index) => (
                                <BannerItem
                                    key={index}
                                    data={item}
                                />
                            ))}
                            <BannerItem data={bannerCollection[0]}/>
                        </>
                    </div>
                    <ul className="dots">
                        <div className="dots-wrapper" ref={dotWrapperRef}>
                            <li className="dot"></li>
                            <li className="dot" onClick={() => slideHandler(-1)}></li>
                            <li className="dot dot--active"></li>
                            <li className="dot" onClick={()=>slideHandler(1)}></li>
                            <li className="dot"></li>
                        </div>
                    </ul>
                </div>
                {/* <BannerChild /> */}
            </div>
        </section>
    );
}
