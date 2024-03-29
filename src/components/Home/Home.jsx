import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
    const [datas, setDatas] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch('https://bestinbd.com/projects/web/task/api/get-req-data/sections?type=slug&value=home&get_section=yes&image=yes&post=yes&file=yes&gallery=yes')
            .then(res => res?.json())
            .then(data => {
                setDatas(data);
                setLoading(false); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false); 
            });
    }, []);

  
    const featured_project = datas?.featured_project;

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === featured_project?.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? featured_project?.length - 1 : prevIndex - 1));
    };

    return (
        <>
            {
                loading ? <></> :
                    (
                        <div className='relative'>
                            <div className=' h-[80vh] w-full flex flex-col justify-between'>
                                <div className='bg-white py-20 px-10'>
                                    <h1 className='text-5xl'>INDULGE IN <br /> DECADENCE</h1>
                                    <div className='pt-20'>
                                        <h1 className='text-3xl font-light'>Project {featured_project[currentIndex]?.data?.product_data?.category_id}</h1>
                                        <h1 className='font-semibold'>{featured_project[currentIndex]?.data?.product_data?.location} <span className='text-2xl font-bold'>.</span> {featured_project[currentIndex]?.data?.product_data?.area}</h1>
                                    </div>
                                </div>
                                <div className='px-10'>
                                    <div className='flex gap-2'>
                                        <button onClick={prevSlide} className="border-2 rounded-full px-2 py-2 hover:bg-white hover:text-blue-950 ease-in-out duration-200 text-white"><FaArrowLeft /></button>
                                        <button onClick={nextSlide} className="border-2 rounded-full px-2 py-2 hover:bg-white hover:text-blue-950 ease-in-out duration-200 text-white"><FaArrowRight /></button>
                                    </div>
                                </div>
                            </div>


                            {!loading && featured_project && featured_project.length > 0 && (
                                <div className='absolute flex items-end gap-10 top-20 left-1/4 right-20'>
                                    <div className="image-container">
                                        <div className='flex gap-5' style={{ transition: 'transform 0.3s ease' }}>
                                            {featured_project?.slice(currentIndex, currentIndex + 3)?.map((featured, index) => (
                                                <div className='' key={index}>
                                                    <img className={` ${index === 0 ? 'h-[550px] w-[500px]' : 'h-72 w-72'}`} src={featured?.data?.images?.list?.[0]?.full_path} alt="" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className='text-center pt-40 pb-10'>
                                <h1 className=' text-5xl  text-white'>Overview</h1>
                                <h1 className='mt-10 text-white px-20'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione id doloribus distinctio suscipit beatae recusandae consequatur! Quos obcaecati commodi labore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis expedita, maxime sapiente pariatur voluptates soluta magni earum, officiis voluptatem cumque delectus a repellat sequi sint voluptatibus dolor nesciunt! Laborum, distinctio sint maiores aspernatur rerum modi incidunt aperiam consectetur? A, vel? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eum nesciunt, nam incidunt, maiores quaerat facere, iure sed sit exercitationem voluptate veritatis error quia laboriosam aliquid distinctio temporibus. Fugit nobis cum ea voluptatum laudantium sit aut maiores corrupti amet, soluta magni eos architecto odit velit laborum reprehenderit consequatur aliquid eum illo doloribus quia? Tenetur quibusdam assumenda iusto labore, eaque aliquid!</h1>
                            </div>

                            <div className="mt-20 pb-10 w-11/12 m-auto ">
                                <div className=''>
                                    <Carousel
                                        additionalTransfrom={0}
                                        arrows
                                        autoPlaySpeed={3000}
                                        centerMode={false}
                                        className=""
                                        containerClass="container-with-dots"
                                        dotListClass=""
                                        draggable
                                        focusOnSelect={false}
                                        infinite
                                        itemClass=""
                                        keyBoardControl
                                        minimumTouchDrag={10}
                                        pauseOnHover
                                        renderArrowsWhenDisabled={false}
                                        renderButtonGroupOutside={false}
                                        renderDotsOutside={false}
                                        responsive={{
                                            desktop: {
                                                breakpoint: {
                                                    max: 3000,
                                                    min: 1024
                                                },
                                                items: 3,
                                                partialVisibilityGutter: 40
                                            },
                                            mobile: {
                                                breakpoint: {
                                                    max: 464,
                                                    min: 0
                                                },
                                                items: 1,
                                                partialVisibilityGutter: 30
                                            },
                                            tablet: {
                                                breakpoint: {
                                                    max: 1024,
                                                    min: 464
                                                },
                                                items: 2,
                                                partialVisibilityGutter: 30
                                            }
                                        }}
                                        rewind={false}
                                        rewindWithAnimation={false}
                                        rtl={false}
                                        shouldResetAutoplay
                                        showDots={false}
                                        sliderClass=""
                                        slidesToSlide={1}
                                        swipeable
                                    >
                                        {featured_project?.map((featured, index) => (
                                            <div className='relative' key={index}>
                                                <img className={` h-[550px] w-11/12`} src={featured?.data?.images?.list?.[0]?.full_path} alt="" />
                                                <div className='text-white absolute bottom-10 p-5 bg-black w-11/12 bg-opacity-75'>
                                                    <h1 className='text-3xl font-light'>Project {featured?.data?.product_data?.category_id}</h1>
                                                    <h1 className='font-semibold'>{featured?.data?.product_data?.location} <span className='text-2xl font-bold'>.</span> {featured?.data?.product_data?.area}</h1>
                                                </div>
                                            </div>
                                        ))}
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>

    );
};

export default Home;
