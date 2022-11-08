import React from 'react'
import Nav from '../../cors/nav/Nav';
// import reseller from '../../images/resellers.jpg';
import style from './sign-up.module.css';
const singUp = () => {
  return (
    <>
      <Nav/>
      <div className={`h-[340px] w-full flex justify-center items-center bg-gh-blue ${style.call}`}>
        <div className={`w-[100%] flex justify-end items-center border`}>
          <p className={`w-[60%] h-[340px] p-10 flex justify-center items-center`}>
             <span className="text-4xl font-black text-[orange]">Get start to Become a reseller</span>
          </p>
          <p className={`w-[40%] h-[340px] ${style.image}`}>
             {/* <img src={reseller} alt="reseller images" className="w-full h-full object-center backdrop-opacity-10 backdrop-invert bg-white/30"/> */}
          </p>
        </div>
      </div>
    </>
  )
}

export default singUp;