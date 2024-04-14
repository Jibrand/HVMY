import React, { useEffect, useState, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import { Api } from '../../Api/Api';

const Index = () => {
    const [Spotifys, setSpotifys] = useState([]);
    const carouselRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const handleClick = () => {
        window.open("https://hackerverse.quest/", "_blank");
    };

    const fetchSpotifys = async () => {
        try {
            const response = await axios.get(`${Api}/hv-comapny/Spotify/getall`);
            setSpotifys(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching Spotifys:', error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchSpotifys();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (carouselRef.current) {
                const nextSlide = carouselRef.current.state.currentSlide + 1;
                const totalSlides = carouselRef.current.state.totalItems;
                const resetIndex = nextSlide >= totalSlides ? 0 : nextSlide;
                carouselRef.current.goToSlide(resetIndex);
            }
        }, 10000); // Adjust the interval time (in milliseconds) as needed

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className="mt-20">
                <div className=" px-4 mx-auto max-w-screen-xl text-center  lg:px-6 ">
                    <div className="mx-auto   max-w-screen-sm ">
                        <h2 className="mb-2 text-4xl tracking-tight font-extrabold hover-underline text-white dark:text-white">
                            PODCASTS LOVE US!
                        </h2>
                    </div>
                </div>
            </section>
            {isLoading ? ( // Show loading state
                <div className="flex justify-center items-center h-screen mx-auto">
                    <p className="text-2xl text-gray-500">Loading...</p>
                </div>
            ) : (
                <>
                    {Spotifys.length == 0 ? (
                        <div className="flex justify-center items-center  mx-auto">
                            <p className="text-xl text-gray-300 mb-20">No Spotify available</p>
                        </div>
                    ) : (
                        <>
                            <Carousel responsive={responsive} vfocusOnSelect={true} ref={carouselRef}>
                                {Spotifys.map((member) => (
                                    <>
                                        <section className="text-gray-600 body-font -mt-10 bg-transparent ">
                                            <div className="container mx-auto   rounded-3xl  lg:p-32 md:p-32 p-2">
                                                <div className="relative  picbox1 rounded-3xl overflow-hidden lg:pt-46 md:pt-46 pt-80">
                                                    <iframe
                                                        className=" overflow-hidden absolute inset-0 w-full h-full rounded-lg  "
                                                        src={member.link}
                                                        title="YouTube Video"
                                                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                                    ></iframe>
                                                </div>
                                            </div>
                                        </section>
                                    </>
                                ))}
                            </Carousel>
                        </>
                    )}
                </>
            )}


            <div className="caption-area text-center bg-transparent  mt-3 mb-24 ">
                <button onClick={handleClick} class=" rounded-md font-semibold bg-[#a0ff00] hover:text-black hover:bg-[#8cba3e]  py-2 px-4 ">
                    Brain Melt in the HACKERverse®
                </button>
            </div>
        </>
    );
};

export default Index;
