import React from 'react';
import './CSS/Faq.css'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLocationArrow } from 'react-icons/fa';

const FAQ = () => {
    return (
        <div>
            <div className="grid grid-cols-2">
                <div className="text-side">
                    <div className=" border-2 flex justify-center p-6">
                        <div className='mt-2 bg-slate-500 mb-3 p-4'>
                            <BsFillTelephoneFill />
                        </div>
                        <div className='text-left'>
                            <h1 className='text-2xl font-bold'>Phone</h1>
                            <h2>01234567890</h2>
                        </div>
                    </div>
                    <div className="border-2 mt-2 flex justify-center p-6">
                        <div className='mt-2 bg-slate-500 mb-3 p-4 '>
                            <AiOutlineMail />
                        </div>
                        <div className='text-left'>
                            <h1 className='text-2xl font-bold'>Email</h1>
                            <h2>doordash@gmail.com</h2>
                        </div>
                    </div>
                    <div className="border-2 mt-2 flex justify-center p-6">
                        <div className='mt-2 bg-slate-500 mb-3 p-4'>
                            <FaLocationArrow />
                        </div>
                        <div className='text-left'>
                            <h1 className='text-2xl font-bold'>Address</h1>
                            <h2>01234567890</h2>
                        </div>
                    </div>
                </div>
                <div className="form-side">
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;