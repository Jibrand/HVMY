import React from 'react'
import demos from '../../img/demos-icon.svg'
import logo from '../../img/HV_horizatonal_website_logo.png'
import { Link } from 'react-router-dom'
import CategoryCreator from '../../img/new/MOCKEDupgoldwhite2.png'

const Hero = () => {
    return (
        <>

            <section className="banner-top  bg-transparent conatiner mx-auto">
                <div className="container px-5  mt-20 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <a href="">
                            <img src={logo} alt="" className='mb-10 h-11 w-auto mx-auto' />
                            <img src={CategoryCreator} alt="" className='mx-auto h-60 w-auto mb-12' />
                        </a>
                        <div className="demos-btn">
                            <span className="ico">
                                <img src={demos} alt="demos" className='' />
                            </span>
                            <span className="txt">Data. Dissent. Disrupiton. Destroying the POC Maelstrom.</span>
                        </div>
                        <div className="title-tp text-center text-4xl mx-auto relative mt-5">
                            Welcome to the HACKERvers<span className="relative">e<span className="text-lg absolute top-0" style={{ fontSize: '1.5rem' }}>®</span></span>
                        </div>
                        <p className='text-gray-400 lg:px-44 '>
                            AI-Powered Self-Service PoC Platform for Cybersecurity. Our
                            cutting-edge AI platform makes it a breeze for everyone to give
                            cybersecurity software a try!
                        </p>

                        <div className="caption-area text-center bg-transparent mt-8">
                            <button onClick={() => { window.open("https://hackerverse.quest/", "_blank"); }} className=" rounded-md font-semibold bg-[#a0ff00] hover:text-black hover:bg-[#8cba3e]  py-2 px-4 ">
                            Join the PoC Revolution Now!
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="banner-top  bg-transparent  mb-10   container mx-auto"  >
        <div className="custom-container">
          <div className="logo lg:mb-0 mb-24">
            <a href="">
              <img src={logo} alt="" className='mb-5' />
              <img src={CategoryCreator} alt="" />
            </a>
          </div>
          <div className="bnr-sec -mt-[100px]">
            <div className="caption-area text-center">
              <div className="demos-btn">
                <span className="ico">
                  <img src={demos} alt="demos" />
                </span>
                <span className="txt">Data. Dissent. Disrupiton. Destroying the POC Maelstrom.</span>
              </div>
              <div className="title-tp text-center text-lg mx-auto relative">
                Welcome to the HACKERvers<span className="relative">e<span className="text-lg absolute top-0" style={{ fontSize: '1.5rem' }}>®</span></span>
              </div>




              <p>
                AI-Powered Self-Service PoC Platform for Cybersecurity. Our
                cutting-edge AI platform makes it a breeze for everyone to give
                cybersecurity software a try!
              </p>
              <Link
                to="/contact/"
                className="lr-more mx-auto px-3 mb-24"
              >
                Join the PoC Revolution Now!
              </Link>

            </div>
          </div>
          <a href="#view-down" className="scroll-down " address="true" />
          <br/> 
        </div>
      </div> */}
        </>
    )
}

export default Hero