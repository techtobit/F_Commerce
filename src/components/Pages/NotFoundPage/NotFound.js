import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='h-screen w-full bg-secondary gap-4 flex flex-col justify-center align-center items-center'>
            <h1 className='text-4xl font-bold text-primary'>Page Not Found</h1>
            <button className='btn-primary font-bold px-5 rounded-full '>
                <Link to=''>Go To Home</Link>
            </button>
        </div>
    );
};

export default NotFound;