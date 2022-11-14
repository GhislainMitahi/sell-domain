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

const importAll = (r) => {
    let images = {};
    r.keys().map(item => { return images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../../images/GroupHome', false, /.svg/));

  
  const pub = [
    {
      _id: 5,
      icon: images['Gr_1.svg'],
      intro: "A single platform makes reselling easy",
      text: "Manage domains, email, and SSL all in one central, secure location using our control panel or automate everything using our API."
    },
    {
      _id: 6,
      icon: images['Gr_2.svg'],
      intro: "Flexible solutions to resell on your own terms",
      text: "Provide customers with a seamless experience with our white-label products and set your own margins to grow your business."
    },
    {
      _id: 7,
      icon: images['Gr_3.svg'],
      intro: "Work with a trusted provider",
      text: "With a platform built on 20+ years of industry experience, rich resources, and expert advice, you have everything you need to start reselling."
    },
    {
      _id: 8,
      icon: images['Gr_4.svg'],
      intro: "Get fast expert support, 24/7",
      text: "Connect with our customer service team, day or night. Our support team is based in Canada and is always ready to resolve any questions or concerns."
    }
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
        <section className="w-[100%] flex justify-center items-center bg-white h-[290px]">
          <div className="w-[85%] flex justify-center items-center ">
          {storeState.map((el) => (
            <div key={el._id} className="w-[25%] flex flex-col justify-center items-center">
            <p className="text-5xl text-[orange]  font-bold">{el.number}</p>
              <p className="text-xl font-bold">{el.name}</p>
          </div>
          ))}
            </div>
          </section>
        <section className='flex w-full justify-center items-center mt-[100px] border'>
          <div className='w-[90%] flex justify-center items-start gap-10'>
          <div className='w-[50%] flex flex-col gap-12'>
            <p className="text-5xl w-[90%] text-[orange]">
              <span className='text-gh-blue'>White-label platform to </span>
              resell domains, email, and SSL
            </p>
            <p className=' text-md text-neutral-500 font-serif italic'>Use our white-label platform to provide your customers a complete one-stop shop by offering domains, email, and SSL seamlessly right from your website.</p>
          </div>
          <div className='flex flex-col w-[50%] gap-10'>
            {pub.map((element) => (
              <div key={element._id} className = 'flex gap-4'>
                <p>
                  <img src={element.icon} alt="icon"/>
                </p>
                <div className='flex flex-col gap-2'>
                  <p className="text-2xl font-bold">{element.intro}</p>
                  <p className='text-neutral-500 text-xl'>{element.text }</p>
                </div>
             </div>
            ))}
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
            <Footer />
      </div>
    </>
  )
}

export default HomePage