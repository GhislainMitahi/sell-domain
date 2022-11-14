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

  const storeState = [
    {
      _id: 1,
      number: "13,000+",
      name: "Resellers"
    },
    {
      _id: 2,
      number: "17+ million",
      name: "Domains"
    },
    {
      _id: 3,
      number: "4+ million",
      name: "Mailboxes"
    },
     {
      _id: 4,
      number: "150+",
      name: "Countries"
    },
  ]
  return (
    <>
              <Nav />
      <div className="w-full">
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
        <section className="w-[100%] flex justify-center items-center bg-white h-[220px]">
          <div className="w-[85%] flex justify-center items-center ">
          {storeState.map((el) => (
            <div key={el._id} className="w-[25%] flex flex-col justify-center items-center">
            <p className="text-5xl text-[orange]  font-bold">{el.number}</p>
              <p className="text-xl font-bold">{el.name}</p>
          </div>
          ))}
            </div>
          </section>
        <section>
          
          </section>
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