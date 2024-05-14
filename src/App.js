import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Images from './Images';
import Section from './Section';
import {gsap, Power3} from 'gsap';

function App() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();
  return (
    <div className="hero">
      <Header timeline = {tl} ease ={ease} />
      
      
      <div className="container">
        <Content timeline = {tl} ease ={ease} />
        <Images timeline = {tl} ease = {ease}/>
      </div>
      <Section />
      
    </div>
  );
}

export default App;
