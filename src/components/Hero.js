import React from 'react'
import '../css/hero.css'
import morning from '../img/morning6.jpg'
import evening from '../img/evening.jpg'
import afternoon from '../img/afternoon.jpg'



function Hero() {

    const currentTime = new Date().getHours()
 
    const today = new Date().toLocaleString('en', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    
      const getImg = currentTime =>{
        if(currentTime > 18 || currentTime < 6){
            return evening
            //5,4,3,2,19,20,21,22,23,24
        }else if(currentTime >= 12 && currentTime < 19){
            return afternoon
            //13-18
        }else{
            return morning
            //6,7.8,9
        } 
    }
  
    
    
    const greeting = currentTime =>{
        let sayGreeting = ''
        if(currentTime > 18 || currentTime < 6){
            return sayGreeting = "Good evening"
        }else if(currentTime >= 12 && currentTime < 19){
            return sayGreeting = "Good afternoon"
        }else{
            return sayGreeting = "Good morning"
        }

    }



    return (
        
        <div 
            className='hero'
            style={{backgroundImage:`url(${getImg(currentTime)})`}}
        >
            {/* <div className="hero__menu" onClick={toggleMenu}>
                <HiOutlineMenuAlt2  style={{color: '#eff2f3', fontSize:'2.2rem'}}/>
            </div> */}
            <div className="hero__text">
                <p className='hero__greeting'>{greeting(currentTime)}!</p>
                <p className='hero__time'>{today}</p>
            </div>
            
        </div>
    )
}

export default Hero
