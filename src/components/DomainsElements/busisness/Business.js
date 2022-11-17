import React from 'react';

const Business = (props) => {
    return (
        <>
            <div className={`w-[90%] flex justify-center items-start gap-2`}>
                <div className={`w-[50%] flex flex-col gap-10`}>
                    <h1 className={`text-5xl font-bold w-[70%]`}>
                        Our business is<pan className={`text-[orange]`}> your success</pan>
                    </h1>
                    <p>Our white-label platform lets you offer domains right from your website and simplifies your communications with fully brandable end-user messages.</p>
                    <div>
                        <h6 className={`text-2xl font-bold`}>Set your margins</h6>
                        <p className={`text-md`}>
                            Sell at your own prices for each product, and take advantage of our promotions
                            and discounts for your own customers.
                        </p>
                    </div>
                    <div>
                        <h6 className={`text-2xl font-bold`}>Brandable end-user messages</h6>
                        <p className={`text-md`}>Have greater control over the look and feel of ICANN-mandated communications,
                            such as domain renewal notices and registration confirmation emails.</p>
                    </div>
                    <div>
                        <h6 className={`text-2xl font-bold`}>Tier-based pricing</h6>
                        <p className={`text-md`}>Benefit from additional discounts on our wholesale TLD prices,
                             which lets you sell with greater margins to fuel the growth of your business.</p>
                    </div>
                </div>
                <div className={`w-[50%]`}>
                    <img src={props.Team} alt="" />
                </div>
            </div>
        </>
    );
};

export default Business;