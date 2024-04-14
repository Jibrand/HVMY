import React, { lazy } from 'react'

import gif1 from '../../img/new/gif1.gif';
import CATEN8logo_onTrans from '../../img/new/CATEN8logo_onTrans3.png';
import DenteonENDingLogo_stacked_outlines_blackChrome from '../../img/new/DenteonENDingLogo_stacked_outlines_blackChrome.png';
import HV_HEIMDALLdata_vikingfire_chromeOutline from '../../img/new/HEIMDALLdata_vikingfire_chromeOutline2.png';
import Anonybit from '../../img/new/Anonybit.png';
import DC719jack from '../../img/new/DC719jack2.png';
import HV_PLEXtrac_LogoWithBlackOutline from '../../img/new/PlexTrac-Logo-Stacked-Purplex-White-Lettering3.png';
import HV_PROCYON_BLUEoriginal from '../../img/new/PROCYON_BLUEoriginal3.png';
import HV_NATsec_unicorn_stickercut_blackChrome from '../../img/new/HV_NATsec_unicorn_stickercut_blackChrome.png';
import SPYDERswooshbat_PurpleBlue_onBlackChrome from '../../img/new/SPYDERswooshbat_PurpleBlue_onBlackChrome.png';
import HV_VIVAdere_CHROME from '../../img/new/HV_VIVAdere_CHROME.png';
import HVbsideslogointro from '../../img/new/HV-bsides-logo-intro.png';
import SAEPiologo_stickercut from '../../img/new/SAEPiologo_stickercut.png';
import BLUMIRApocscreen from '../../img/new/SENTEONpocscreen.jpg';
import HV_NEW_AI_Machine from '../../img/new/HV_NEW_AI_Machine_blues (1).png';

const Quote = lazy(() => import('./Quote'));
const Paragraph = lazy(() => import('./Paragraph'));
const Hero = lazy(() => import('./Hero'));
const Newsletter = lazy(() => import('./Newsletter'));
const Footer = lazy(() => import('./Footer'));
const Testimonials = lazy(() => import('./Testimonials'));
const Index1 = lazy(() => import('./Teams'));

const index = () => {
    return (
        <>
            <Hero />
            <section className="bg-transparent container mx-auto py- lg:sm:w-[80%] md:sm:w-[80%]" id="view-down">
                <div className="custom-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content-are">
                                <article>
                                    <div className="primary-heading text-center mb-5">
                                        <div className="lg:text-4xl md:text-4xl text-3xl text-white font-bold hover-underline text-center">
                                            Meet our Rockstar Customers!
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div style={{ background: `url(${gif1}) center center / cover no-repeat` }}></div>
                    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap- justify-center">
                        <div className="flex justify-center">
                            <img loading="lazy" className="h-auto max-w-full rounded-lg" src={CATEN8logo_onTrans} alt="" />
                        </div>
                        <div className="flex justify-center">
                            <img loading="lazy" className="h-auto max-w-full rounded-lg" src={DenteonENDingLogo_stacked_outlines_blackChrome} alt="" />
                        </div>
                        <div className="flex justify-center">
                            <img loading="lazy" className="h-auto max-w-full rounded-lg" src={HV_VIVAdere_CHROME} alt="" />
                        </div>
                        <div className="flex justify-center">
                            <img loading="lazy" className="h-auto max-w-full rounded-lg" src={HV_PROCYON_BLUEoriginal} alt="" />
                        </div>
                        <div className="flex justify-center">
                            <img loading="lazy" className="h-auto max-w-full rounded-lg" src={HV_PLEXtrac_LogoWithBlackOutline} alt="" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 gap-10 justify-center -mt-6">
                        <div className="flex justify-center">
                            <img loading="lazy" className="h-auto max-w-full rounded-lg" src={Anonybit} alt="" />
                        </div>
                        <div className="flex justify-center">
                            <img loading="lazy" className="h-auto max-w-full rounded-lg" src={SPYDERswooshbat_PurpleBlue_onBlackChrome} alt="" />
                        </div>
                        <div className="flex justify-center">
                            <img loading="lazy" className="h-auto max-w-full rounded-lg" src={HV_HEIMDALLdata_vikingfire_chromeOutline} alt="" />
                        </div>
                        <div className="flex justify-center">
                            <img loading="lazy" className="h-auto max-w-full rounded-lg" src={HV_NATsec_unicorn_stickercut_blackChrome} alt="" />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-1 justify-ter -mt-24 p-16">
                            <div className="  justify-center">
                                <img loading="lazy" className="h-auto max-w-full rounded-lg" src={HVbsideslogointro} alt="" />
                            </div>
                            <div className="  justify-center">
                                <img loading="lazy" className="h-auto max-w-full" src={DC719jack} alt="" />
                            </div>
                            <div className="flex justify-center items-start">
                                <img loading="lazy" className="h-auto max-w-full rounded-lg" src={SAEPiologo_stickercut} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="caption-area text-center bg-transparent -mt-10  mb-24 ">
                        <button onClick={() => { window.open("https://hackerverse.quest/", "_blank"); }} className=" rounded-md font-semibold bg-[#a0ff00] hover:text-black hover:bg-[#8cba3e]  py-2 px-4 ">
                            Bug Out in the HACKERverse®
                        </button>
                    </div>

                    <Quote />

                    <div className="col-md-12 py-10 bg-transparent">
                        <div className="content-are">

                            <article>
                                <div className="primary-heading text-center mb-5">
                                    <div className="lg:text-4xl md:text-4xl text-3xl text-white font-bold hover-underline text-center">
                                        Our Killer POC
                                        <sup>
                                            <span className="" style={{ fontSize: 15 }}>TM</span>
                                        </sup>{" "}
                                        Interface!
                                    </div>
                                </div>
                            </article>
                        </div>
                        <section className="text-gray-600 body-font">
                            <div className="container px- py-[20px] mx-auto">
                                <div className="">
                                    <img loading="lazy" src={BLUMIRApocscreen} height="100px" width="auto" className="demo-image rounded-3xl" alt="Our Killer POC Interface" />
                                </div>
                            </div>
                        </section>
                        <div className="caption-area text-center bg-transparent mt-5">
                            <button onClick={() => { window.open("https://hackerverse.quest/", "_blank"); }} className=" rounded-md font-semibold bg-[#a0ff00] hover:text-black hover:bg-[#8cba3e]  py-2 px-4 ">
                                Skull Jack the HACKERverse®
                            </button>
                        </div>

                        <div className="col-md-12 py-10 mt-20">
                            <div className="content-are">
                               
                                <article>
                                <div className="primary-heading text-center mb-5">
                                    <div className="lg:text-4xl md:text-4xl text-3xl text-white font-bold hover-underline text-center">
                                    How it Works
                                    </div>
                                </div>
                            </article>
                            </div>
                            <section className="text-gray-600 body-font">
                                <div className="container px- py-[20px] mx-auto">
                                    <div className="">
                                        <img loading="lazy" src={HV_NEW_AI_Machine} height="100px" width="auto" className="demo-image rounded-3xl" alt="How it Works - AI Machine" />
                                    </div>
                                </div>
                            </section>
                            <div className="caption-area text-center bg-transparent mt-5">
                                <button onClick={() => { window.open("https://hackerverse.quest/", "_blank"); }} className=" rounded-md font-semibold bg-[#a0ff00] hover:text-black hover:bg-[#8cba3e]  py-2 px-4 ">
                                    Immerse yourself in the HACKERverse®
                                </button>
                            </div>
                            <br/>
                            <Paragraph />
                            
                            <Testimonials />
                            <Index1 />

                            {/* <div className="col-md-12">
                                <Blogs />
                                <Spotify />
                                <PodcastVideo />
                            </div> */}
                                <Newsletter />
                                <Footer />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default index