import React, {useRef, useEffect} from 'react'
import './Content.css'
function Content({timeline}) {
    let h1 = useRef(null);
    let pText = useRef(null);
    let btn = useRef(null);
    useEffect(() => {
        timeline.from([h1.children, pText, btn], 1, {
            opacity: 0,
            y: "100",
            skewY: 10,
            Stagger: {
                amount: .4
            }
        }, "-=1")
    })
  return (
    <div>
      <div className="content">
        <h1 className="content-inner-bold" ref = {el => h1 = el}>
            <div>Hello!!</div>
            <br />
            <div>My name is Muhammad Daka Anugrah.</div>
        </h1>
        <p ref = {el => pText = el}>
            I am 21 years old, 6th Semester student at Asia e University.
        </p>
        <button ref = {el => btn = el}>
            Explore
        </button>
      </div>
    </div>
  )
}

export default Content
