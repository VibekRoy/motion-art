import { useEffect, useRef, useState } from 'react';
import webGLFluidEnhanced from 'webgl-fluid-enhanced';
import Navbar from './components/Navbar';
import './App.css'
import './Responsive.css'
import Content from './components/Content';
import Ratings from './components/Ratings';
import Wand from './components/Wand';
import Application from './components/Application';
import Browsers from './components/Browsers'
import Features from './components/Features'
import Footer from './components/Footer'
const App = () => {
  
  const canvasRef = useRef(null);
  const divRef = useRef(null);

  const handleMouseEvent = (event) => {
    const target = canvasRef.current
    if(target)
      {
        target.dispatchEvent(new MouseEvent(event.type,event))
      }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const div = divRef.current;
    const root = getComputedStyle(document.documentElement);
    if (div) {
      div.addEventListener('click', handleMouseEvent);
      div.addEventListener('mousemove', handleMouseEvent);
      div.addEventListener('mousedown', handleMouseEvent);
      div.addEventListener('mouseup', handleMouseEvent);
      div.addEventListener('mouseover', handleMouseEvent);
      div.addEventListener('mouseout', handleMouseEvent);
    }

    if (canvas) {
      webGLFluidEnhanced.simulation(canvas,{
        BACK_COLOR:'#0E0F1A',
        BRIGHTNESS:0.4,
        CURL:10,
        DENSITY_DISSIPATION: 3, // Rate at which density dissipates
        VELOCITY_DISSIPATION: 2,
        BLOOM_SOFT_KNEE: 0.6,
      });
    }

    
  }, [canvasRef]);

  return (
    <>
    <canvas ref={canvasRef} />
    <div ref={divRef} className='main-div'>
      <Navbar />
      <Content />
      <Ratings />
      <Wand />
      <Application />
      <Browsers />
      <Features />
      <Footer />
    </div>
    </>
  );
};

export default App;