import React from 'react';
import Btn from '../../../cors/Button/Button';

const GirlPub = (props) => {
    const btnValue = {
    name : "Get start" 
    }

    return (
        <div className=" w-[90%] flex rounded-2xl fotterCardImage ">
            <div className='w-[100%] flex justify-end items-center fotterCardText'>
              <div className='w-[53%] flex justify-center items-center bg-[#0e76bc]  h-full rounded-r-2xl'>
                <div className='text-3xl w-[80%] font-bold flex justify-center items-center'>
                <p className='w-[60%]'>Join our <span className={`text-[white]`}>domain reseller program</span></p>
              </div>
              <p className='w-[20%] flex justify-start items-center'>
                  <Btn btn={btnValue} />
                </p>
              </div>
            </div>
          </div>
    );
};

export default GirlPub;