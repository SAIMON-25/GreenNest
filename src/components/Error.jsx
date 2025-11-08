import React from 'react';
import errorImage from '../assets/404.png'


const Error = () => {
    return (
        <div className='bg-neutral grid place-content-center'>
            <div >
                <img className='rounded-full' src={errorImage} alt="" />
            </div>
        </div>
    );
};

export default Error;