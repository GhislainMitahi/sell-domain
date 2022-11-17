import React from 'react';

const Expert = (props) => {
    return (
        <div className={`w-[90%] flex justify-center items-start gap-10`}>
            <div className={`w-[50%]`}>
                <img src={props.expert} alt="" className={`w-full h-full`} />
                </div>
                <div className={`w-[50%] flex flex-col gap-20`}>
                    <h1 className={`text-5xl font-bold w-[85%]`}>
                        Domain experts<pan className={`text-[orange]`}> you can count on</pan>
                    </h1>
                    <p className={`text-md`}>With over 20 years of industry experience, our team of experts offer incredible practical knowledge to set you up for success.</p>
                    <div>
                        <h6 className={`text-2xl font-bold`}>Work with a global team who understands resellers</h6>
                        <p className={`text-md`}>
                        Our products have been designed with the highest demands in mind to benefit our customers. With offices in Toronto, Amsterdam,
                        Bonn, and Singapore, we are always ready and able to help.
                        </p>
                    </div>
                    <div>
                        <h6 className={`text-2xl font-bold`}>24/7 customer support</h6>
                    <p className={`text-md`}>Our team of experts is available around the clock whenever you need prompt
                        support via email, live chat, or phone call.</p>
                    </div>
                    <div>
                        <h6 className={`text-2xl font-bold`}>Tools and resources</h6>
                        <p className={`text-md`}>We ensure you have the resources you need to get started and succeed. We equip you with video tutorials, detailed documentation, API guides, a knowledge base for technical questions, FAQs, and business insights via our blog.</p>
                    </div>
                </div>
            </div>
    );
};

export default Expert;