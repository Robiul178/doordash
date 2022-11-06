import React from 'react';
import './CSS/Home.css'
import img from './image/222.png';
import img2 from './image/1.png';
import img50 from './image/fifty.png';
import img3 from './image/333.png';
import bur from './image/category/burger.jpg';
import dess from './image/category/desserts.jpg';
import pizza from './image/category/pizza.jpg';
import sw from './image/category/sandwitch.jpg';
import sides from './image/category/sides.jpg';
import drink from './image/category/drink.jpg';
import { useEffect } from 'react';
import { useState } from 'react';
import HomeMenu from './DisplayCourse/HomeMenu';
import car from './image/svg/car.png';
import delivery from './image/svg/fast-delivery.png';
import menu from './image/svg/menu.png';
import waiter from './image/svg/waiter.png';


const Home = () => {

    const [courses, setCourses] = useState([]);
    console.log(courses)

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div>
            <section id='hero-section' className='home-section bg-red-500'>
                <div className="carousel w-full text-white">
                    <div id="slide1" className="carousel-item  w-full">
                        <div className="flex w-full">
                            <div className="grid  place-items-center ">
                                <div className='p-28'>
                                    <h1 className='text-6xl font-bold'>HOT & SPICY</h1>
                                    <h1 className='text-7xl font-bold'>FRIED CHIK’N</h1>
                                    <p className='text-xl font-bold'>Choose Your Favorite Ingredients</p>
                                </div>
                            </div>
                            <div className="grid  ">
                                <img src={img} className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item  w-full">
                        <div className="flex w-full">
                            <div className="grid  place-items-center ">
                                <div className='p-28'>
                                    <h1 className='text-6xl font-bold'>HOT & SPICY</h1>
                                    <h1 className='text-7xl font-bold'>FRIED CHIK’N</h1>
                                    <p className='text-xl font-bold'>Choose Your Favorite Ingredients</p>
                                </div>
                            </div>
                            <div className="grid  ">
                                <img src={img2} className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item  w-full">
                        <div className="flex w-full">
                            <div className="grid  place-items-center ">
                                <div className='p-28'>
                                    <h1 className='text-4xl font-bold'>YOUR BURGE’R</h1>
                                    <h1 className='text-7xl font-bold'>YOUR TEST</h1>
                                    <p className='text-xl font-bold'>Choose Your Favorite Ingredients</p>
                                </div>
                            </div>
                            <div className="grid  ">
                                <img src={img3} className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="grid grid-cols-6">
                    <div className='shadow-2xl'><img src={bur} alt="" /></div>
                    <div className='shadow-2xl'><img src={pizza} alt="" /></div>
                    <div className='shadow-2xl'><img src={sides} alt="" /></div>
                    <div className='shadow-2xl'><img src={sw} alt="" /></div>
                    <div className='shadow-2xl'><img src={dess} alt="" /></div>
                    <div className='shadow-2xl'><img src={drink} alt="" /></div>
                </div>
            </section>

            <section className='bg-yellow-300'>
                <div className="grid grid-cols-3 text-white">
                    <div className='mt-28 p-10 text-center'>
                        <h1 className='text-6xl font-bold'>4 Convenient  Pick Up Spots</h1> <br />
                        <p>I am text block. Click edit button to
                            change this text. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Ut elit tellus,
                            luctus nec ullamcorper mattis.</p>
                    </div>
                    <div className='p-14'>
                        <img src={img50} alt="" />
                    </div>
                    <div className='mt-28 p-10 text-center'>
                        <h1 className='text-6xl font-bold'>Fast & Free
                            Home Delivery </h1> <br />
                        <p>I am text block. Click edit button to
                            change this text. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Ut elit tellus,
                            luctus nec ullamcorper mattis.</p>
                    </div>
                </div>
            </section>

            <section className='p-10'>
                <div className='p-14'>
                    <h1 className='text-4xl font-bold'>MORE GREAT SIDES</h1>
                    <p className='text-xl'>For every main dish, there is a perfect side.</p>
                </div>
                {
                    courses.map(course => <HomeMenu
                        course={course}
                        key={course.id}
                    ></HomeMenu>)
                }
            </section>

            {/* ? */}
            <section id='menu-down'>
                <div>

                </div>
            </section>
            {/* ? */}

            <section className='delivery-section bg-yellow-100'>
                <div className="flex">
                    <div className="common ">
                        <img className='h-20 relative left-36' src={waiter} alt="" />
                        <h1 className='text-xl font-bold'>Friendly Service</h1>
                        <p>Filet mignon buffalo shankle leberkas, porchetta frankfurter.</p>
                    </div>
                    <div className="common ">
                        <img className='h-20 relative left-36' src={menu} alt="" />
                        <h1 className='text-xl font-bold'>Original Recipes</h1>
                        <p>Filet mignon buffalo shankle leberkas, porchetta frankfurter.</p>
                    </div>
                    <div className="common">
                        <img className='h-20 relative left-36' src={car} alt="" />
                        <h1 className='text-xl font-bold'>Free Parking Lot</h1>
                        <p>Filet mignon buffalo shankle leberkas, porchetta frankfurter.</p>
                    </div>
                    <div className="common">
                        <img className='h-20 relative left-36' src={delivery} alt="" />
                        <h1 className='text-xl font-bold'>Fast Dlivery</h1>
                        <p>Filet mignon buffalo shankle leberkas, porchetta frankfurter.</p>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Home;