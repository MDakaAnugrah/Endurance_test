import React, {useRef, useEffect} from 'react'
import './Section.css'
import gsap from 'gsap'
import foto from './foto3.jpg'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function Section() {
    const imgRef = useRef(null);
    useEffect(() => {
        const el = imgRef.current;
        gsap.fromTo(el, {rotation: 0}, {rotation: 180, duration: 3, scrollTrigger: {
          trigger : el
        }})
    }, [])
  return (
    <div className='container-app'>
      <img src={foto} className='container-logo' alt="foto" ref={imgRef} />
    </div>
  )
}

export default Section
