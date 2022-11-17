import React from 'react';
import { BsFillEnvelopeFill, BsShieldFillCheck, } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";

  const defaultValue = [
      {
            _id: 323,
            icon: <BsFillEnvelopeFill/>,
            title: "Email",
            text: "An affordable, secure, and reliable email solution trusted by more than 4 million users worldwide.",
            more:"Learn More"
        },
      {
            _id: 200,
            icon: <BsShieldFillCheck />,
            title: "SSL certificates",
            text: "Offer the world’s most trusted SSL products to build trust and encrypt sensitive information such as credit card numbers and personal data.",
            more : "Learn More"
      }, {
          _id: 100,
            icon: <AiFillLock />,
            title: "Sitelock website security",
            text: "Protect your customers’ websites from malware and vulnerabilities.",
            more : "Learn More"
        },
    ]

const Looking = ({ content = defaultValue}) => {

    return (
        <div>
            <section className={`bg-gh-blue text-white w-full flex justify-center items-center pt-[100px] pb-[100px]`}>
                    <div className={`w-[90%] flex flex-col gap-10`}>
                        <div className={`w-full flex flex-col justify-center items-start`}>
                            <div className={`flex flex-col justify-center items-start w-[100%] gap-6`}>
                                <h6 className={`text-6xl font-sans font-semibold`}>Looking to resell <span className={`text-[orange]`}>at a glance</span></h6>
                                <p className={`text-xl font-semibold text-slate-300`}>more than just domains?</p>
                            </div>
                        </div>
                    <div className={`flex gap-10`}>
                        {content.map((element) => (
                            <div className='flex flex-col gap-10 mt-5 w-[33.3%]' key={element._id}>
                                
                                <div className={`p-10 flex gap-10 rounded-2xl bg-[#1D1D5B]`}>
                                    <p className={`text-3xl`}>{element.icon}</p>
                                    <div className={`flex flex-col gap-3`}>
                                        <h6 className={`text-xl font-semibold `}>{ element.title }</h6>
                                        <p className={`text-md text-slate-300`}>{element.text}</p>
                                        <p className={`text-[orange]`}>{element.more }</p>
                                  </div>
                                </div>
                        </div>
                        ))}
                        </div>
                    </div>
            </section>
            
        </div>
    );
};

export default Looking;