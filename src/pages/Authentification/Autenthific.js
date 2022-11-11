import React from 'react';
import Logo from '../../images/log.png';
import Input from '../../cors/Input/Input';
import Btn from '../../cors/Button/Button';
import { useForm } from 'react-hook-form';


const Autenthific = () => {


    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
    }

    const inputGroupOne =
        [
            {_id: 0,
                label: 'Username',
                warning: 'Must be lowercase and between 3-20 characters long.Username cannot be changed once the account has been created.',
                name : 'Username'
            },
            {
                _id: 1,
                label: 'Password',
                warning: 'At least 10 characters long.',
                name: 'Password',
            },
            {
                _id: 2,
                label: 'Verify Password',
                 name: 'Vpassword',
            },
            {
                _id: 3,
                label: 'Company Name',
                 name: 'Company',
            }
        ]
    const inputGroupTwo = [
        {
            _id: 5,
            label: 'Email Address',
            name : 'email',
        }, {
            _id: 6,
            label: 'Verify Email Address',
                name : 'Vemail'
            
        }, {
            _id: 7,
            label: 'Address',
            name : 'Address'
            
        }, {
            _id: 8,
            label: 'City',
            name : 'City'
        }
    ]

     const btnValue = {
    name : "Continue to Billing"
  }
    return (
        <>
            <div className="bg-gh-blue h-[100%] w-full flex justify-center items-center text-gh-blue">
                <section className=" w-[50%] bg-white flex flex-col justify-center items-center my-[100px]  rounded-2xl">
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
                        <form className='flex flex-col gap-10 mb-10'
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            {inputGroupOne.map((el) => (
                                <Input label={el.label} warning={el.warning} key={el._id} name={ el.name } />
                            ))}
                            <div className="flex w-full gap-6">
                                <p className="w-[50%]">
                                    <Input label="First Name" name='first-name'
                                        register={register}
                                    />
                                </p>
                                <p className="w-[50%]">
                                    <Input label="Last Name" name='last-name'
                                        register={register}
                                    />
                                </p>
                            </div>
                            {inputGroupTwo.map((el, k) => (
                                <Input label={el.label} key={el._id} name={el.name}
                                    // register={register}
                                />
                            ))}
                            <div className='flex flex-col justify-around gap-6'>
                                <label HmlFor="country" className='text-gh-blue font-semibold' htmlFor='country'>Country</label>
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
                                    <select className='border h-10 rounded-md border-gh-blue text-sm' name="state" id="state"
                                        // ref={register}
                                    >
                                        <option value="rdc" className="" >RDC</option>
                                        <option value="rwanda">Rwanda</option>
                                        <option value="tanzanie">Tanzania</option>
                                        <option value="kenya">kenya</option>
                                    </select>
                                </p>
                                <p className="w-[50%]">
                                    <Input label="Zip/Postal Code" name="state"
                                        // ref={register}
                                    />
                                </p>
                            </div>
                            
                            <Input label="Phone Number" />
                        <div className="flex gap-2">
                                <input type="checkbox" id="phone" name="phone"
                                    // ref={register}
                                />
                                <label htmlFor="phone" className='text-sm text-gray-500 font-serif italic'>Keep me posted on important updates.</label>
                            </div>
                            <div className='self-end w-[30%]'>
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