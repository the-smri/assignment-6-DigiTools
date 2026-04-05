import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-15'>
            <div className='container mx-auto  p-16 text-white'>

            <div className='grid grid-cols-3 justify-items-center items-center'>

                <div className='text-center space-y-3'>
                    <h3 className='text-6xl'>50K+</h3>
                    <p className='text-white'>Active User</p>
                </div>
                <div className='text-center px-20 border-x-2 border-white/30 space-y-3'>
                    <h3 className='text-6xl'>200+</h3>
                    <p className='text-white'>Premium Tools</p>
                </div>
                <div className='text-center space-y-3'>
                    <h3 className='text-6xl'>4.9</h3>
                    <p className='text-white'>Rating</p>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default Stats;