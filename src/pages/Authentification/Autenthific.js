import React from 'react';
import Logo from '../../images/log.png';
import Input from '../../cors/Input/Input'


const Autenthific = () => {

    const inputElements =
        [
            {
                label: 'Username',
                warning: 'Must be lowercase and between 3-20 characters long.Username cannot be changed once the account has been created.'
            },
            {
                label: 'Password',
                warning : 'At least 10 characters long.'
            },
            {
                label: 'Verify Password',
            },
            {
                label: 'Company Name',
            }

        ]
    return (
        <>
            <div className="bg-gh-blue h-[100%] w-full flex justify-center items-center text-gh-blue">
                <section className=" w-[55%] bg-white flex flex-col justify-center items-center my-[100px]  rounded-2xl">
                    <div className="flex w-[90%] justify-start">
                            <div className="h-[100px] w-[200px]">
                                <img src={Logo} alt="logo" className="w-full h-full"/>
                            </div>
                        </div>
                        <ul className="flex w-[90%] justify-between">
                        <li className='text-gh-blue text-md font-bold flex flex-col justify-between items-center border h-[40px] w-[30%]'>
                            <p className="">Account set-up</p>
                            <p className='h-1 w-full bg-gh-blue'></p>
                        </li>
                        <li className='text-gh-blue text-md font-bold flex flex-col justify-between items-center border h-[40px] w-[30%]'>
                            <p className="">Billing Information</p>
                            <p className='h-1 w-full bg-gh-blue'></p>
                        </li>
                        <li className='text-gh-blue text-md font-bold flex flex-col justify-between items-center border h-[40px] w-[30%]'>
                            <p className="">Review</p>
                            <p className='h-1 w-full bg-gh-blue'></p>
                        </li>
                        </ul>
                    <div className="w-[90%] border flex flex-col gap-10">
                        <h1 className='self-start text-xl font-semibold mt-9'>Account Credentials</h1>
                        <form className='flex flex-col gap-10 border'>
                            {inputElements.map((el, k) => (
                                <Input label={el.label} warning={el.warning} key={k} />
                            ))}
                            <div className="flex w-full gap-6">
                                <p className="w-[50%]">
                                    <Input label = "First Name" />
                                </p>
                                <p className="w-[50%]">
                                    <Input label="Last Name" />
                                </p>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Autenthific;