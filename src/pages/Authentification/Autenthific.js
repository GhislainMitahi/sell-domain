import React from 'react';
import Logo from '../../images/log.png';
import Input from '../../cors/Input/Input';
import Btn from '../../cors/Button/Button'


const Autenthific = () => {

    const inputGroupOne =
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
    const inputGroupTwo = [
        {
            label : 'Email Address'
        },{
            label : 'Verify Email Address'
        },{
            label : 'Address'
        },{
            label : 'City'
        }
    ]

     const btnValue = {
    name : "Continue to Billing"
  }
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
                        <li className='text-gh-blue text-md font-bold flex flex-col justify-between items-center h-[40px] w-[30%]'>
                            <p className="">Account set-up</p>
                            <p className='h-1 w-full bg-gh-blue'></p>
                        </li>
                        <li className='text-gh-blue text-md font-bold flex flex-col justify-between items-center h-[40px] w-[30%]'>
                            <p className="">Billing Information</p>
                            <p className='h-1 w-full bg-gh-blue'></p>
                        </li>
                        <li className='text-gh-blue text-md font-bold flex flex-col justify-between items-center h-[40px] w-[30%]'>
                            <p className="">Review</p>
                            <p className='h-1 w-full bg-gh-blue'></p>
                        </li>
                        </ul>
                    <div className="w-[90%] flex flex-col gap-10">
                        <h1 className='self-start text-xl font-semibold mt-9'>Account Credentials</h1>
                        <form className='flex flex-col gap-10 mb-10'>
                            {inputGroupOne.map((el, k) => (
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
                            {inputGroupTwo.map((el, k) => (
                                <Input label={el.label} key={k} />
                            ))}
                            <div className='flex flex-col justify-around gap-6'>
                                <label for="country" className='text-gh-blue font-semibold'>Country</label>
                                <select className= 'border h-10 rounded-md border-gh-blue text-sm' name="country" id="country">
                                    <option value="rdc">RDC</option>
                                    <option value="rwanza">Rwanda</option>
                                    <option value="tanzanie">Tanzania</option>
                                    <option value="kenya">kenya</option>
                                </select>
                            </div>
                            <Input label="Email Address" />
                            <div className="flex  w-full gap-6">
                                <p className="w-[50%] flex flex-col gap-4">
                                    <label for="country" className='text-gh-blue font-semibold'>State</label>
                                    <select className= 'border h-10 rounded-md border-gh-blue text-sm' name="country" id="country">
                                        <option value="rdc" className="" >RDC</option>
                                        <option value="rwanda">Rwanda</option>
                                        <option value="tanzanie">Tanzania</option>
                                        <option value="kenya">kenya</option>
                                    </select>
                                </p>
                                <p className="w-[50%]">
                                    <Input label="Zip/Postal Code" />
                                </p>
                            </div>
                            
                            <Input label="Phone Number" />
                        <div className="flex gap-2">
                                <input type="checkbox" id="scales" name="scales"/>
                                <label for="scales" className='text-sm text-gray-500 font-serif italic'>Keep me posted on important updates.</label>
                            </div>
                            <div className='self-end w-[22%]'>
                                <Btn btn={btnValue} />
                            </div>    
                        </form>
                    </div>
                </section>
            </div>
        </>
    )
};

export default Autenthific;