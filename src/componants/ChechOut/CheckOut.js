import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Checkout.css'

const CheckOut = () => {
    const chechoutCourse = useLoaderData();
    const { image, price, title, id } = chechoutCourse;
    return (
        <div className='checkout-page mt-20'>
            <div className="payment-method">
                <p className='text-lg mb-4'>Proceed with mobile number & email to complete the payment!</p>
                <input type="text" placeholder="Your Email" className="input input-bordered input-info w-full  max-w-lg" /> <br />
                <input type="text" placeholder="Your Phone Number" className="mt-2 input input-bordered input-info w-full max-w-lg" />
                <button className="btn mt-2 btn-secondary w-full max-w-lg">Go Ahed</button>
            </div>
            <div className="selected-course  border p-4">
                <div className='flex relative top-3 border-b'>
                    <img className='w-20' src={image} alt="" />
                    <h1 className='text-xl relative left-5'>{title}</h1>
                </div>
                <div className='flex justify-between mt-4 border-b'>
                    <div className='text-left'>
                        <h1 className='text-xl'>Course Name:</h1>
                        <h1 className='text-xl'>Price:</h1>
                        <h1 className='text-xl'>Course ID:</h1>
                    </div>
                    <div className='text-left'>
                        <h1 className='text-xl'>{title}</h1>
                        <h1 className='text-xl'>${price}</h1>
                        <h1 className='text-xl'>{id}</h1>
                    </div>
                </div>
                <div className="flex justify-between">
                    <h1 className='text-xl'>Total(+vat):</h1>
                    <h1 className='text-xl'>${price}</h1>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;