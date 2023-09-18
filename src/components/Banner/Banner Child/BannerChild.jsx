import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment, useContext, useEffect, useRef, useState } from 'react'
import './BannerChild.scss'
import bannerCollection from '../../../dbCollections/bannerCollection'
import {faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { essentialContext } from '../../../Assets/context'

export default function BannerChild() {
    const slider = useRef(null);
    const [margin,setMargin] = useState(-18)
    // const [index,setIndex] = useState(4)
    let index = 4;
    const [cardIndex,setCardIndex] = useContext(essentialContext)

    const slideHandler = (direction) => {
        let slides = document.querySelectorAll('.slide--image');
        let i = cardIndex;
        console.log(margin);
        slider.current.style.transition = "margin 0.3s ease"
        slides[cardIndex].style.border = "2px solid transparent"
        if(direction === -1){  
            if(margin > -84){
                setMargin((margin) => margin-6);
                i++;
                index = i
                setCardIndex((cardIndex) => cardIndex + 1)
            }else{
                if(margin !== -90){
                    setMargin((margin) => margin-6);
                }
                setTimeout(() => {
                    slider.current.style.transition = "none";
                    setMargin(() => -18);
                },300)
                i = 4;
                index = i
                setCardIndex(() => 4);
            }
        }else{
            if(margin < -6){
                setMargin((margin) => margin+6)
                i--;
                index = i
                setCardIndex((cardIndex) => cardIndex - 1);
            }else{
                if(margin !== 0){
                    setMargin((margin) => margin+6)
                }
                setTimeout(() => {
                    slider.current.style.transition = "none"
                    setMargin(() => -72)
                },300)
                i=13
                index = i
                setCardIndex(() => 13)
            }
        }
        // setCardIndex(() => i)
        console.log(cardIndex);
        slides[i].style.border = "2px solid rgb(26, 195, 48)"
    }

    useEffect(()=>{
        let slides = document.querySelectorAll('.slide--image');
        slides[index].style.border = "2px solid rgb(26, 195, 48)"

        setInterval(() => {
            slideHandler(1);
        },2000)
    },[])

  return (
    <div className="banner-child--container">
        <div className="previous-arrow" onClick={()=>{slideHandler(-1)}}>
            <FontAwesomeIcon icon={faChevronLeft}/>
        </div>
        <div className="items-wrapper" >
            <div className="items-slider" ref={slider} style={{marginLeft: `${margin}rem`}}>
                {
                    bannerCollection.map((item,index) =>(
                        <Fragment key={index}>
                            {
                                index >= 9 &&
                                <img src={`/images/${item.image}`} className="slide--image" alt="" />
                            }
                        </Fragment>
                    ))
                }
                {
                    bannerCollection.map((item,index) => (
                        <img src={`/images/${item.image}`} key={index} className="slide--image" alt="" />
                    ))
                }
                {
                    bannerCollection.map((item,index) =>(
                        <Fragment key={index}>
                            {
                                index < 3 &&
                                <img src={`/images/${item.image}`} className="slide--image" alt="" />
                            }
                        </Fragment>
                    ))
                }
            </div>
        </div>
        <div className="next-arrow" onClick={()=>{slideHandler(1)}}>
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
    </div>
  )
}
