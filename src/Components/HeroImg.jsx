import React from 'react'


function HeroImg() {
    const styles = {
        width: "30px",
       borderRadius: "2px",
       marginInline: "10px",
      textAlign: "center"
    }
  return (
    <div className='hero__img__wrapper'>
  <h1 className='hero__img__h1'> <img src="/Images/Logo.png" alt="Business Logo" style={styles}/> WelcomeInApp </h1> 
      <img src="/Images/HeroImage.png"   alt="My Hero" loading='lazy' />
      <h2 className='hero__img__h2'>Easily manage your <br /> property today.</h2> 
    </div>
  )
}

export default HeroImg
