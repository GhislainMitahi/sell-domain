import React from 'react';
import Nav from '../../cors/nav/Nav';
import Footer from '../../components/Footer/Footer';
 //import style from './Home.module.css';
import './HomePage.css';
import Btn from '../../cors/Button/Button';
import woman from '../../images/woman.webp';
import men from '../../images/two-men-using-low-cost-professional-email.webp';
// import womanTwo from '../../images/woman-using-computer.webp';
import Icons from '../../components/Icons/Icons';
import { BsCheckCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';


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
  
const imagesPlaceHold = importAll(require.context('../../images/GroupeHome2', false, /.svg/));

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

  const meaning = [
    {
      _id: 9,
      icon: imagesPlaceHold['Grp_1.svg'],
      intro: "Website builders",
      text: "Create a totally seamless website-building experience and increase customer loyalty."
    },
    {
      _id: 10,
      icon: imagesPlaceHold['Grp_2.svg'],
      intro: "Internet service providers",
      text: "Boost customer stickiness by cross-selling or bundling our solutions with your products and services."
    },
    {
      _id: 11,
      icon: imagesPlaceHold['Grp_3.svg'],
      intro: "Marketing agencies",
      text: "Create simplicity for your clients by offering additional value-added services in a one-stop shop."
    },
    {
      _id: 12,
      icon: imagesPlaceHold['Grp_4.svg'],
      intro: "Hosting companies",
      text: "Resell on your own terms and increase margins by integrating our whitelabel products."
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
        <section className='flex w-full justify-center items-center mt-[100px]'>
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
        <section className='w-full flex flex-col justify-center items-center gap-20 mt-[10rem]'>
          <div className=' w-[90%] flex justify-center items-center'>
          <div className=' w-[50%] flex justify-center'>
              <img src={woman} alt="" />
          </div>
          <div className='w-[50%] flex flex-col gap-10'>
              <h2 className='text-gh-blue text-5xl w-[90%] font-bold'>
                <span className="text-[orange]">
                  Selling domains </span>
                 made simple
              </h2>
            <p className=' text-gray-500 tex-md'>Domain names are at the center of everything we do. Our white-label platform lets you start selling 650+ domain extensions in minutes through our intuitive control panel. You can also integrate via our API to completely automate domain registration and management.</p>
            <p className='text-gray-500 text-md'>You’ll have the flexibility to set your own margins, offer domains right from your website, and brand your end-user messages. Use our products on your terms.</p>
              <p className=' text-gh-blue text-xl font-bold'>
               <Link to="/domains">Explore our domain reseller program</Link>
              </p>
            </div>
          </div>
          <div className=' w-[90%] flex justify-center items-center'>
            <div className='w-[50%] flex flex-col gap-10'>
              <h2 className='text-gh-blue text-5xl w-[95%] font-bold'>
                <span className="text-[orange]">
                  Boost customer loyalty with </span>
                 low-cost professional email
              </h2>
            <p className=' text-gray-500 tex-md'>OpenSRS Email is an affordable, secure, and reliable email solution trusted worldwide. It costs less than comparable alternatives and gives you flexible mailbox storage of up to 100GB.</p>
            <p className='text-gray-500 text-md'>Whether you are looking to give email away for free, as part of a bundle, or offer it as a value-added service, OpenSRS Email allows you to pay for what you need and avoid the upfront and ongoing operational costs of running an in-house solution.</p>
              <p className=' text-gh-blue text-xl font-bold'>
                <a href="http://">Explore professional email</a>
              </p>
            </div>
            <div className=' w-[50%] flex justify-center'>
              <img src={men} alt="" />
          </div>
          </div>
          
          <div className=' w-[90%] flex justify-center items-center'>
            <div className='w-[50%] flex flex-col gap-10'>
              <h2 className='text-gh-blue text-5xl w-[95%] font-bold'>
                <span className="text-[orange]">
                  SSL certificates for </span>
                 every customer need
              </h2>
            <p className=' text-gray-500 tex-md'>Resell the world’s most trusted SSL certificate brands at wholesale prices. We offer Wildcards, SAN, DV, OV, and EV options, plus resources to help you offer the right certificate.</p>
              <p className=' text-gh-blue text-xl font-bold'>
                <a href="http://">Explore our SSL reseller program</a>
              </p>
            </div>
            <div className=' w-[50%] flex flex-col justify-center bg-[#FFF6E5] rounded-xl gap-6 p-6'>
              <h6 className='text-xl font-bold text-gray-600'>As an OpenSRS SSL reseller, you can:</h6>
              <ul className='flex flex-col gap-4 text-gray-500'>
                <li className='flex gap-2'>
                  <p className='text-blue-500 text-2xl'>
                    <BsCheckCircle />
                  </p>
                <p>
                   Take advantage of wholesale SSL certificate prices
              </p>
                </li>
                <li className='flex gap-2'>
                  <p className='text-blue-500 text-2xl'>
                    <BsCheckCircle />
                  </p>
                <p>
                   Register and re-issue your customers’ certificates from a single place
              </p>
                </li>
                <li className='flex gap-2'>
                  <p className='text-blue-500 text-2xl'>
                    <BsCheckCircle />
                  </p>
                <p>
                   Sell right from your website or client portal by using our API or plugins for solutions like WHMCS, HostBill, Clientexec, and Blesta
              </p>
                </li>
              </ul>
          </div>
          </div>
          </section>
        <section className='w-full my-10'>
          <div className='bg-gh-blue w-full flex justify-center items-center'>
          <div className=' text-white flex flex-col justify-center items-center w-[90%]'>
            <h6 className="py-[5rem] text-5xl">Who is OpenSRS for?</h6>
            <ul className='grid grid-cols-2 gap-8'>
              {
                meaning.map((elements) => (
                  <li key={elements._id} className="flex gap-8  pb-[5rem]">
                    <p>
                      <img src={elements.icon} alt="" />
                    </p>
                    <div>
                    <h6> {elements.intro}</h6>
                      <p>
                        {elements.text}
                    </p>
                    </div>
                  </li>
                ))
                }
            </ul>
            </div>
            </div>
          </section>
        <section className='w-full flex flex-col justify-center items-center py-[5rem]'>
          <div className='w-[90%] flex gap-x-4'>
          <div className='w-[50%]'>
              <Icons/>
          </div>
            <div className='w-[50%] flex justify-center items-center'>
              <p className='text-gh-blue text-4xl font-bold w-[85%]'>
                <span className='text-[orange]'>Trusted worldwide by companies that </span> care about customer experience
              </p>
          </div>
          </div>
          </section>
        <section className="w-full flex justify-center items-center mb-10">
          <div className=" w-[90%] flex rounded-2xl fotterCardImage ">
            <div className='w-[100%] flex justify-end items-center fotterCardText'>
              <div className='w-[53%] flex justify-center items-center bg-[#0e76bc]  h-full rounded-r-2xl'>
                <div className='text-3xl w-[80%] font-bold flex justify-center items-center'>
                <p className='w-[60%]'>Join our domain reseller program</p>
              </div>
              <p className='w-[20%] flex justify-start items-center'>
                  <Btn btn={btnValue} />
                </p>
              </div>
            </div>
          </div>
          </section>
            <Footer />
      </div>
    </>
  )
}

export default HomePage