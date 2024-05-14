import React, {useRef, useEffect} from 'react'
import './header.css'

function Header({timeline, ease}) {
    let logo = useRef;
    let menu_item1 = useRef;
    let menu_item2 = useRef;
    let menu_item3 = useRef;
    useEffect(() => {
        timeline.from(logo, 1, {
            opacity: 0,
            y: '100'
        });
        timeline.from([menu_item1, menu_item2, menu_item3], 2, {
            opacity: 0,
            y: -200,
            stagger: {
                amount: .4
            },
            ease: ease
        })
    })
  return (
    <div>
      <div className="header">
        <div className="logo" ref = {el => logo = el}>
            Logo
        </div>
        <div className="menu">
            <div className="menu-items" ref = {el => menu_item1 = el}>Menu1</div>
            <div className="menu-items" ref = {el => menu_item2 = el}>Menu2</div>
            <div className="menu-items" ref = {el => menu_item3 = el}>Menu3</div>
        </div>
    </div>
      
    </div>
  )
}

export default Header
