import React from 'react';
import banner from '../../../src/assets/Banner/banner-5250183.jpg';

const Banner = () => {
    return (
        <div
            className="hero h-[550px]"
            style={{
                backgroundImage: `url(${banner})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="w-lg mt-[-50px] flex flex-col items-center">

                    <h1 className="text-4xl mb-5 lg:text-6xl font-bold text-base-600">Hey! Your Smart Assistant</h1>
                    <p className="mb-5 text-3xl">
                        All your services in one place. Get what you need, whenever you need it.
                    </p>
                    <div className='mt-16 border flex justify-between items-center max-w-[500px] w-full rounded-md'>
                        <input type="text" placeholder="Type here" className=" w-full max-w-md bg-transparent p-4" />
                        <button className="btn btn-secondary bg-green-700 border-none mr-2">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;