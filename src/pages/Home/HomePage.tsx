import React from 'react';
import Nav from '../../cors/nav/Nav';
import Footer from '../../components/Footer/Footer';
//  import style from './Home.module.css';
import './HomePage.css';
import Btn from '../../cors/Button/Button';

const HomePage = () => {
  const btnValue = {
    name : "Get start" 
  }
  return (
    <>
      <div className="w-full">
          <Nav />
        <section className={`h-[100vh] homeImage`}>
          <div className='w-full'>
            <div className='headText flex justify-center items-center text-gh-blue '>
              <div className='h-[60%] w-[60%] space-y-12'>
              <h1 className='text-6xl font-bold leading-[1.1]'>
                Sell Domains, Email, and SSL Right from Your Websit
              </h1>
              <p className='text-xl font-bold w-[70%] leading-5'>
                Resell domain names, professional email, and SSL certificates at scale with Tucows OpenSRS. Set your own margins and manage it all through a single platform.
              </p>
              <p className='w-[20%]'>
                  <Btn btn={ btnValue } />
              </p>
              </div>
              </div>
         </div>
          </section>
          <section></section>
          <section></section>
          <section></section>
          <section></section>
          <section></section>
          <section></section>
          <section></section>
          <section></section>
          <section></section>
            <Footer />
      </div>
    </>
  )
}

export default HomePage