import React from 'react';
import Btn from '../../cors/Button/Button';
import logo from '../../images/log.png';
import { BsChatFill } from "react-icons/bs";

const Footer = () => {

    const btnValue = {
    name : "Sign up for our newsletter" 
  }

    const footerElement = [
        {
            _id: 1,
            title: "Platform",
            list : [
                      "Domains",
                      "Email",
                      "SSL",
            ]
        },
        {
            _id: 2,
            title: "Popular",
            list: [
                    "Get Started",
                    "Sign In",
                    "Contact Sales",
            ]

        },
        {
             _id: 3,
            title: "Support",
            list: [ "System Status",
                    "Knowledge Base",
                    "Contact Support",
            ]
        },
        {
            _id: 4,
            title: "Legal",
            list: [
                 "Payment Terms",
                 "Privacy Policy",
            ]
        },
        {
            _id: 5,
            title: "Corporate",
            list: [ "About Us",
                    "Investors",
                    "News",
                  ]
        }
    ]
    return (
        <>
            <div className={`flex justify-center items-start w-full h-[400px] bg-gh-blue text-white`}>
                <section className="flex flex-col justify-center items-center w-[90%] gap-6">
                    <div className="flex w-full justify-between items-center">
                        <p className="w-[30%] h-[200px] flex justify-start items-center" >
                            <img src={logo} alt=" logo" className="w-full h-full"/>
                        </p>
                        <p className="w-[40%] flex justify-end items-center text-lg text-end" >Stay informed of product updates, industry news, and other important alerts.</p>
                        <p className="w-[30%] flex justify-center items-center " ><Btn btn={btnValue}/></p>
                    </div>
                    <div className="flex w-full justify-center items-center ">
                        { footerElement.map((el, k) => (
                        <p className="w-[25%] h-[170px] flex flex-col gap-4 " key = {k}>
                                <h1 className = {`self-start text-[#0e76bc] text-2xl font-bold`}>{el.title}</h1>
                            <ul className = {`flex flex-col self-start gap-3`}>
                                {el.list.map((list) => (
                                    <li className="">{list}</li>
                                ))}
                            </ul>
                        </p>
                        ))}
                    </div>
                </section>
            </div>
            <div className="fixed top-[90%] left-[92%]  text-[#0e76bc] text-lg bg-[orange] rounded-2xl shadow-md">
                    <ul className="flex justify-center items-center gap-2 h-[45px] w-[80px] ">
                        <li className=""><BsChatFill/></li>
                        <li className="">Chat</li>
                    </ul>
                </div>
        </>
    );
};

export default Footer;