import React from 'react';
import Nav from '../../cors/nav/Nav';
import style from './sign-up.module.css';
import Btn from '../../cors/Button/Button';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

const singUp = () => {

  const btnValue = {
    name : "Become a reseller today"
  }

const importAll = (r) => {
    let images = {};
    r.keys().map(item => { return images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../../images/Group', false, /.svg/));

    const groupImage = [
      images['Group.svg'],
      images['Group-1.svg'],
      images['Group-8.svg'],
      images['Group-6.svg'],
      images['Group-2.svg'],
      images['Group-3.svg'],
      images['Group-4.svg'],
      images['Group-5.svg'],
      images['Group-7.svg'],
      images['Group-9.svg'],
      images['Group-10.svg'],
      images['Group-11.svg']
  ]

  return (
    <div>
      <Nav/>
      <section className={`h-[340px] w-full flex flex-col justify-center items-center  ${style.call}`}>
        <div className={`w-[100%] flex justify-end items-center bg-gh-blue`}>
          <p className={`w-[60%] h-[340px] p-10 flex justify-center items-center`}>
             <span className="text-4xl font-black text-[orange]">Get start to Become a reseller</span>
          </p>
          <p className={`w-[40%] h-[340px] ${style.image}`}>
          </p>
        </div>
      </section>
      <section className={`flex flex-col space-y-24 mb-28`}>
      <div className={`flex justify-center items-center w-full pt-16`}>
        <div className={`flex w-[90%] space-x-8`}>
          <div className=" flex w-[33.3%] space-x-2">
            <p><svg width="65" height="43" viewBox="0 0 65 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M49.5922 37.8797C48.4185 40.6109 45.7314 42.3809 42.7588 42.3809H14.4473C9.06431 42.3809 5.4641 36.8397 7.65133 31.9212L18.4005 7.749C19.5946 5.06383 22.2577 3.3335 25.1964 3.3335H53.1462C58.4889 3.3335 62.0889 8.79892 59.9796 13.7076L49.5922 37.8797Z" fill="#040449"/>
<path d="M35.5208 20.8543C35.5208 12.5731 28.8021 5.85431 20.5208 5.85431C12.2396 5.85431 5.52081 12.5731 5.52081 20.8543C5.52081 29.1356 12.2396 35.8543 20.5208 35.8543C28.8021 35.8543 35.5208 29.1356 35.5208 20.8543Z" stroke="#FFA500" stroke-width="2.42014" stroke-miterlimit="10"/>
<path d="M16.572 25.3618H19.7895V16.5643C19.5345 16.9543 19.152 17.2768 18.642 17.5318C18.147 17.7868 17.6445 17.9143 17.1345 17.9143H16.887V14.6293H16.9995C17.5395 14.6293 17.9895 14.5468 18.3495 14.3818C18.7245 14.2018 19.0245 13.9843 19.2495 13.7293C19.4895 13.4593 19.6545 13.1668 19.7445 12.8518C19.8495 12.5368 19.902 12.2293 19.902 11.9293H22.917V25.3618H25.9545V28.3543H16.572V25.3618Z" fill="#FFA500"/>
</svg>
</p>
          <p className={`text-2xl font-bold`}>
            Create an account and pay the $95 one-time sign-up fee.
          </p>
          </div>
           <div className=" flex w-[33.3%] space-x-2">
            <p className={`flex justify-center`}>              
              <svg width="65" height="43" viewBox="0 0 65 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M49.5922 37.8797C48.4185 40.6109 45.7314 42.3809 42.7588 42.3809H14.4473C9.06431 42.3809 5.4641 36.8397 7.65133 31.9212L18.4005 7.749C19.5946 5.06383 22.2577 3.3335 25.1964 3.3335H53.1462C58.4889 3.3335 62.0889 8.79892 59.9796 13.7076L49.5922 37.8797Z" fill="#040449"/>
<path d="M35.5208 20.8543C35.5208 12.573 28.8021 5.85429 20.5208 5.85429C12.2396 5.85429 5.52081 12.573 5.52081 20.8543C5.52081 29.1355 12.2396 35.8543 20.5208 35.8543C28.8021 35.8543 35.5208 29.1355 35.5208 20.8543Z" stroke="#FFA500" stroke-width="2.42014" stroke-miterlimit="10"/>
<path d="M15.2988 25.4068C15.2988 24.7018 15.4263 24.0643 15.6813 23.4943C15.9363 22.9243 16.2663 22.4068 16.6713 21.9418C17.0913 21.4618 17.5563 21.0268 18.0663 20.6368C18.5763 20.2468 19.0863 19.8793 19.5963 19.5343C20.0013 19.2643 20.3838 19.0018 20.7438 18.7468C21.1188 18.4918 21.4413 18.2368 21.7113 17.9818C21.9963 17.7118 22.2213 17.4418 22.3863 17.1718C22.5663 16.9018 22.6563 16.6093 22.6563 16.2943C22.6563 15.7693 22.4688 15.3268 22.0938 14.9668C21.7338 14.5918 21.1938 14.4043 20.4738 14.4043C19.7688 14.4043 19.1838 14.6218 18.7188 15.0568C18.2688 15.4768 17.9088 16.0318 17.6388 16.7218L14.9388 15.3718C15.4488 14.2468 16.1613 13.3543 17.0763 12.6943C18.0063 12.0343 19.1463 11.7043 20.4963 11.7043C21.3363 11.7043 22.0863 11.8243 22.7463 12.0643C23.4063 12.3043 23.9613 12.6343 24.4113 13.0543C24.8763 13.4593 25.2288 13.9468 25.4688 14.5168C25.7088 15.0718 25.8288 15.6718 25.8288 16.3168C25.8288 16.9768 25.7088 17.5618 25.4688 18.0718C25.2288 18.5818 24.9138 19.0543 24.5238 19.4893C24.1338 19.9093 23.6988 20.2993 23.2188 20.6593C22.7388 21.0043 22.2513 21.3418 21.7563 21.6718C21.3363 21.9568 20.9238 22.2418 20.5188 22.5268C20.1288 22.7968 19.7763 23.0818 19.4613 23.3818C19.1613 23.6668 18.9138 23.9743 18.7188 24.3043C18.5238 24.6343 18.4263 24.9868 18.4263 25.3618H25.7388V28.3543H15.2988V25.4068Z" fill="#FFA500"/>
              </svg>
            </p>
         <p className={`text-2xl font-bold`}>
            The $95 sign-up fee will be converted into account credits. Spend it however you want.
            </p>
          </div>
           <div className=" flex w-[33.3%] space-x-2">
            <p className={`flex justify-center`}> <svg width="65" height="43" viewBox="0 0 65 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M49.5922 37.8797C48.4185 40.6109 45.7314 42.3809 42.7588 42.3809H14.4473C9.06431 42.3809 5.4641 36.8397 7.65133 31.9212L18.4005 7.749C19.5946 5.06383 22.2577 3.3335 25.1964 3.3335H53.1462C58.4889 3.3335 62.0889 8.79892 59.9796 13.7076L49.5922 37.8797Z" fill="#040449"/>
<path d="M35.5208 20.8543C35.5208 12.5731 28.8021 5.8543 20.5208 5.8543C12.2396 5.8543 5.52081 12.5731 5.52081 20.8543C5.52081 29.1356 12.2396 35.8543 20.5208 35.8543C28.8021 35.8543 35.5208 29.1356 35.5208 20.8543Z" stroke="#FFA500" stroke-width="2.42014" stroke-miterlimit="10"/>
<path d="M20.8303 28.5793C19.7803 28.5793 18.8128 28.4068 17.9278 28.0618C17.0578 27.7018 16.2703 27.1093 15.5653 26.2843L18.2878 24.2593C18.6328 24.7843 19.0153 25.1593 19.4353 25.3843C19.8703 25.6093 20.3278 25.7218 20.8078 25.7218C21.4828 25.7218 22.0453 25.5418 22.4953 25.1818C22.9453 24.8068 23.1703 24.2818 23.1703 23.6068C23.1703 22.9318 22.9153 22.3918 22.4053 21.9868C21.8953 21.5818 21.2353 21.3793 20.4253 21.3793H18.7153V18.4993H20.4253C21.3103 18.4993 21.9553 18.2818 22.3603 17.8468C22.7653 17.4118 22.9678 16.9093 22.9678 16.3393C22.9678 15.7693 22.7578 15.3118 22.3378 14.9668C21.9328 14.6068 21.3928 14.4268 20.7178 14.4268C20.0878 14.4268 19.5853 14.5693 19.2103 14.8543C18.8353 15.1243 18.5203 15.4993 18.2653 15.9793L15.6103 14.6068C16.0903 13.6918 16.7803 12.9793 17.6803 12.4693C18.5953 11.9593 19.5928 11.7043 20.6728 11.7043C21.4678 11.7043 22.1953 11.8168 22.8553 12.0418C23.5153 12.2518 24.0778 12.5593 24.5428 12.9643C25.0078 13.3543 25.3678 13.8343 25.6228 14.4043C25.8778 14.9743 26.0053 15.6118 26.0053 16.3168C26.0053 17.0668 25.8403 17.7418 25.5103 18.3418C25.1803 18.9268 24.7303 19.4293 24.1603 19.8493C24.8203 20.2393 25.3378 20.7493 25.7128 21.3793C26.1028 22.0093 26.2978 22.7518 26.2978 23.6068C26.2978 24.3118 26.1778 24.9718 25.9378 25.5868C25.6978 26.1868 25.3453 26.7118 24.8803 27.1618C24.4303 27.5968 23.8603 27.9418 23.1703 28.1968C22.4953 28.4518 21.7153 28.5793 20.8303 28.5793Z" fill="#FFA500"/>
</svg></p>
            <p className={`text-2xl font-bold`}>
              Choose an integration option and start selling!
            </p>
          </div>
        </div>
        </div>
        <div className='self-center'>
          <Link to="/count/Autenthific">
            <Btn btn={btnValue} />
          </Link>
          
        </div>
      </section>
      <section className="w-[100%] flex justify-center items-center mb-10">
        <div className="flex justify-start items-center w-[90%]">
        <div className="w-[50%] flex flex-col justify-center items-center pr-20 gap-4">
          <h1 className="self-start text-5xl font-bold">Partner with us</h1>
          <p className='w'>
             You are about to join one of the world’s largest domain registrars trusted by 10,000+ resellers in over 150 countries.
          </p>
        </div>
        <div className="w-[50%]">
          <div className={`w-full flex justify-center items-center`}>
            <ul className="grid grid-cols-3 grid-flow-rows gap-4">
              {groupImage.map((partImage) => (
                 <li className=" flex justify-center  items-center bg-[#FFF6E5] rounded-md">
                <img src={partImage} alt="" className='h-[80%] w-[80%]'/>
              </li>
              ))}
            </ul>
          </div>
          </div>
          </div>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default singUp;