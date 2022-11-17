import React from 'react';

const Questions = () => {

    const Questions= [
        {
            _id: 3276,
            question: "Why buy domains from OpenSRS?",
            res: "With 650+ TLDs, we got every domain extension you will ever need. You can use our control panel to easily manage your domains in your portfolio or easily integrate using API to eliminate manual tasks.",
            more: "Learn More"
        },
        {
            _id: 65467,
            question: "How can I pay for my services?",
            res: "We offer several methods to pre-fill your account, including by wire transfer, check, international money order, credit card, and Automated Clearing House (direct withdrawal). We only accept payments in U.S. Dollars (USD).",
            more: "Learn More"
        },
        {
            _id: 65468,
            question: "How do I sign up?",
            res: "Getting started with OpenSRS is easy. We provide you everything you need to sell domains, email and SSL.",
            more: "Get Start"
        }
    ]
    return (
        <div className={`w-[90%] flex flex-col justify-center items-start gap-36`}>
            <h6 className={`text-6xl font-bold`}>Frequently asked questions</h6>
            <div className={`flex gap-10`}>
                {Questions.map((elements) => (
                    <div key={elements._id} className={`flex-col flex gap-2 justify-between items-start bg-[#FFF6E5]  p-10 rounded-lg h-[300px] w-[33.3%]`}>
                        <div className={`flex flex-col gap-2`}>
                            <h6 className={`text-2xl font-bold text-gh-blue`}>{elements.question }</h6>
                            <p className={``}>{elements.res}</p>
                        </div>
                        <p className={`text-blue-700 text-md`}>
                            {elements.more}
                    </p>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Questions;