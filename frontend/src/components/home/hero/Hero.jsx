import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO ICREP' title='An inter university centre of excellence' />
            <p>|| तेजस्विनावधीतमस्तु ||<br/>
            May learning illuminate us both</p>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
