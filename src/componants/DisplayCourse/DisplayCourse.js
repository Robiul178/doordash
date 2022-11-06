import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const DisplayCourse = (props) => {
    const { description, id, title, image, rating, price } = props.course;

    return (

        <div>

            <div className='item-card text-left'>
                <div className="card h-24 m-6 card-side bg-base-100 shadow-xl">
                    <figure><img src={image} className='h-36' alt="Movie" /></figure>
                    <div className="card-body">
                        <div className="flex justify-between">
                            <div> <h2 className="card-title ">{title}</h2></div>
                            <div><Link to={`/readmore/${id}`}><AiOutlineShoppingCart /></Link> </div>
                        </div>
                        <div>
                            <p>{
                                description.length > 90 ?
                                    <p>{description.slice(0, 90) + '...'}</p>
                                    :
                                    <p>{description}</p>
                            }</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <div className="card w-3/4 mt-20 mb-8 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="" /></figure>
                    <h2 className="card-title ml-2">{title}</h2>
                    <div className='p-4'>
                        <p>{
                            description.length > 50 ?
                                <p>{description.slice(0, 50) + '...'} <Link className="text-yellow-300" to={`/readmore/${id}`}>ReadMore</Link> </p>
                                :
                                <p>{description}</p>
                        }</p>
                    </div>
                    <div className='flex justify-around border-t border-blue-900'>
                        <p>Rating:{rating.rate}</p>
                        <p>Price:{price}</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default DisplayCourse;