import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/HomeMenu.css'

const HomeMenu = (props) => {
    console.log('homenu theke bolci', props)

    const { description, id, title, image, price } = props.course;
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className='short-menu shadow-xl flex p-3 '>
                    <div className="img">
                        <img className='h-16' src={image} alt="" />
                    </div>
                    <div className="text-left title">
                        <div className="flex justify-between">
                            <div><h1 className='text-lg font-bold'>{title}</h1></div>
                            <div className='font-bold'>${price}</div>
                        </div>
                        <div><p>{description}</p></div>
                    </div>
                    <div>
                        <button className='btn btn-outline'>
                            <Link to={`/readmore/${id}`}>Buy</Link>
                        </button>
                    </div>
                </div>


                <div>
                    <div className='flex short-menu shadow-xl  p-3 '>
                        <div className="img">
                            <img className='h-16' src={image} alt="" />
                        </div>
                        <div className="text-left title">
                            <div className="flex justify-between">
                                <div><h1 className='text-lg font-bold'>{title}</h1></div>
                                <div className='font-bold'>${price}</div>
                            </div>
                            <p>{description}</p>
                        </div>
                        <div>
                            <button className="btn btn-outline">
                                <Link to={`/readmore/${id}`}>Buy</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeMenu;