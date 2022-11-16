import React from 'react';
import Style from './Domains.module.css';
import Nav from '../../cors/nav/Nav';
import Btn from '../../cors/Button/Button';

const Domains = () => {

    const btnValue = {
    name : "Get start" 
    }
    
    const caracters = [
        {
                _id: 1,
                title: "Robust platform for domain registration",
                text: "With OpenSRS, you can easily offer 650+ domain extensions. We frequently update our platform to meet the ongoing gTLD and ccTLD requirements."
        },
        {
            _id: 2,
            title: "Flexibility to help you grow your business",
            text: "Run your own business from end to end. Set your own margins and control your branding. We work behind the scenes to ensure you always have flexibility."
        },
        {
            _id: 3,
            title: "Unmatched service and technical expertise",
            text: "We’re proud of our exceptional customer service and use our extensive domain industry experience to facilitate your growth and success."
        }
    ]


    


    return (
    <>
            <Nav/>
        <div className='w-full'>
            <section className={`h-[100vh] text-gh-blue flex justify-start items-center w-full ${Style.headerDom}`}>
                <div className={`h-[90%] w-full flex justify-center items-center`}>
                  <div className={`w-[100%] h-[95%] mt-20 flex justify-start items-center ${Style.headerDomText} `}>
                            <div className={`h-[60%] w-[50%] flex justify-center items-start`}>
                                <div className={`w-[80%] flex flex-col gap-6`}>
                              <div className='w-[90%]'>
                                <p className={`font-semibold`}>DOMAINS</p>
                                <h1 className={`text-blue-500 text-6xl font-bold `}>Become a Domain Reseller</h1>
                                </div>
                              <p className={`text-gh-blue w-[60%] font-semibold text-xl`}>
                            Get access to every domain extension you’ll ever need. You’ll also get tools and
                            resources to help you seamlessly sell domain names, right from your website.
                                    </p>
                                    <p className={`w-[20%]`}>
                                        <Btn btn={btnValue} />  
                             </p>           
                    </div>
                    </div>
                </div>
            </div>
                </section>
                <section className={'w-full flex justify-center items-center mt-20'}>
                    <div className={`w-[90%] flex flex-col justify-center items-center gap-20`}>
                        <div className={`w-full flex flex-col justify-center items-start gap-5`}>
                            <h4 className={`text-gh-blue text-5xl font-bold`}>Work with an <span className={`text-[orange]`}>industry leader</span></h4>
                            <p className={`text-neutral-600 text-md font-sans`}>OpenSRS works with some of the biggest hosting companies, service providers, and website builders worldwide.
                                More than 13,000 resellers in over 150
                                countries rely on our platform to provide outstanding services to their customers.</p>
                        </div>
                        <div className={`flex gap-4`}>
                            {
                                caracters.map((element) => (
                                <div className={`flex flex-col justify-between items-center w-[33.3%] gap-4`} key={element._id}>
                                    <h6 className={`text-2xl font-bold text-gh-blue `}>{element.title}</h6>
                                    <p className='text-neutral-600 '>{element.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
    </>
    );
};

export default Domains;