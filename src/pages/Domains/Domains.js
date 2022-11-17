import React from 'react';
import Style from './Domains.module.css';
import Nav from '../../cors/nav/Nav';
import Btn from '../../cors/Button/Button';
import Business from '../../components/DomainsElements/busisness/Business';
import Expert from '../../components/DomainsElements/Expert/Expert';
import Looking from '../../components/DomainsElements/Looking/Looking';
import Prices from '../../components/DomainsElements/Prices/Prices';
import GirlPub from '../../components/DomainsElements/GirlPub/GirlPub';
import Team1 from '../../images/business-team-succeeding.webp';
import EpertPicture from '../../images/Domain-experts-desk.webp'

const Domains = () => {

    const btnValue = {
    name : "Get start" 
    }
    
    const importAll = (r) => {
    let images = {};
    r.keys().map(item => { return images[item.replace('./', '')] = r(item); });
    return images;
    }
    const icons = importAll(require.context('../../images/DomainGroup1', false, /.svg/));

    const caracters = [
        {
                _id: 1,
                icon: icons['icon1.svg'],
                title: "Robust platform for domain registration",
                text: "With OpenSRS, you can easily offer 650+ domain extensions. We frequently update our platform to meet the ongoing gTLD and ccTLD requirements."
        },
        {
            _id: 2,
            icon:icons['icon2.svg'],
            title: "Flexibility to help you grow your business",
            text: "Run your own business from end to end. Set your own margins and control your branding. We work behind the scenes to ensure you always have flexibility."
        },
        {
            _id: 3,
           icon: icons['icon3.svg'],
            title: "Unmatched service and technical expertise",
            text: "We’re proud of our exceptional customer service and use our extensive domain industry experience to facilitate your growth and success."
        }
    ]

    const open1 = [
        {
            _id: 4,
            title: "Our products, your brand",
            text: "Provide customers with a seamless experience with our white-label products."
        },
        {
            _id: 5,
            title: "Domain name suggestions",
            text: "Save time by utilizing our built-in domain name suggestion tool to find the perfect domain name."
        }
    ]

    const open2 = [
        {
            _id: 6,
            title: "Choose the products you want",
            text: "We offer domain names, hosted email, SSL certificates, and web security products."
        },
        {
            _id: 7,
            title: "Create custom user roles and permissions",
            text: "Customize your employees’ level of access perfectly using individual settings, or assign an existing permission profile."
        }
    ]

     const open3 = [
        {
            _id: 8,
            title: "Scale with wholesale pricing",
            text: "Our pricing plans are flexible, transparent and tiered for more discounts as you grow."
        },
        {
            _id: 9,
            title: "Offer premium domains",
            text: "Boost revenue while offering your customers their perfect domain name."
        }
    ]

    const open4 = [
        {
            _id: 10,
            title: "Brandable whois",
            text: "Build brand trust by listing your reseller name on the whois record."
        },
        {
            _id: 11,
            title: "Sub-reseller accounts",
            text: "Create fully branded sub-reseller accounts, set their pricing, and earn commission from their domain sales."
        }
    ]

    const pub = [
      {  _id: 12,
        title: "API",
        text: "Automate everything between your systems and ours. OpenSRS’s powerful APIs let you and your customers provision, renew, and modify our products on demand."
        },
        {  _id: 13,
        title: "Third-party tools",
        text: "Use our plugins to easily connect to popular hosting and billing automation control panels, including WHMCS, HostBill, ClientExec, and Blesta."
        },
        {  _id: 4,
        title: "OpenSRS Control Panel",
        text: "Manage your portfolio, user permissions, account details, and products with bulk commands."
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
                <section className={'w-full flex justify-center items-around my-20'}>
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
                                    <div className={`flex justify-center items-start w-[33.3%] gap-4`} key={element._id}>
                                        <p><img src={element.icon } alt="" /></p>
                                        <div className={`flex flex-col gap-4`}>
                                        <h6 className={`text-2xl font-bold text-gh-blue `}>{element.title}</h6>
                                    <p className='text-neutral-600 '>{element.text}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className={`bg-gh-blue text-white w-full flex justify-center items-center pt-[100px] pb-[20px]`}>
                    <div className={`w-[90%] flex flex-col gap-10`}>
                        <div className={`w-full flex flex-col justify-center items-start`}>
                            <div className={`flex flex-col justify-center items-start w-[50%] gap-6`}>
                                <h6 className={`text-6xl font-sans font-semibold`}>OpenSRS <span className={`text-[orange]`}>at a glance</span></h6>
                                <p className={`text-xl font-semibold text-slate-300`}>Everything you need to offer domain services.</p>
                            </div>
                        </div>
                        <div className={`flex gap-10`}>
                            <div className={`h-[700px]`}>
                                <div className='flex flex-col gap-10 mt-5'>
                                {open1.map((element) => (
                                        <div key={element._id} className={`p-10 flex flex-col gap-3 rounded-2xl bg-[#1D1D5B]`}>
                                            <h6 className={`text-xl font-semibold`}>{ element.title }</h6>
                                            <p className={`text-md text-slate-300`}>{element.text }</p>
                                        </div>
                                ))}
                        </div>
                            </div>
                             <div className={`h-[700px]`}>
                            <div className={`flex flex-col gap-10 mt-20`}>
                                {open2.map((element) => (
                                        <div key={element._id} className={` p-10 flex flex-col gap-3 rounded-2xl bg-[#1D1D5B]`}>
                                            <h6 className={`text-xl font-semibold`}>{ element.title }</h6>
                                            <p className={`text-md text-slate-300`}>{element.text }</p>
                                        </div>
                                ))}
                                </div>
                                </div>
                                <div className={`h-[700px]`}>
                            <div className={`flex flex-col gap-10 mt-6`}>
                                {open3.map((element) => (
                                        <div key={element._id} className={` p-10 flex flex-col gap-3 rounded-2xl bg-[#1D1D5B]`}>
                                            <h6 className={`text-xl font-semibold`}>{ element.title }</h6>
                                            <p className={`text-md text-slate-300`}>{element.text }</p>
                                        </div>
                                ))}
                                </div>
                            </div>
                           <div className={`flex flex-col gap-10`}>
                                {open4.map((element) => (
                                        <div key={element._id} className={` p-10 flex flex-col gap-3 rounded-2xl bg-[#1D1D5B]`}>
                                            <h6 className={`text-xl font-semibold`}>{ element.title }</h6>
                                            <p className={`text-md text-slate-300`}>{element.text }</p>
                                        </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`w-full flex h-[80vh] justify-center items-center `}>
                    <div className={`w-[90%] flex gap-11 justify-start items-start`}>
                            <div className={`flex flex-col justify-center items-center gap-11`}>
                                <h6 className={`text-6xl font-bold text-gh-blue`}>
                                    Domain registration and management <span className='text-[orange]'>made easy</span>
                                </h6>
                                <p className={`text-xl text-slate-800 font-sans`}>We’re here to make the domain management lifecycle simple and in your control.
                                    Plus, we have options to integrate with our systems and end-user messaging
                                    that you can make your own.</p>
                            </div>
                            <div className={`flex flex-col justify-center items -center gap-10`}>
                                {pub.map((element) => (
                                    <div key={element._id} className={``}>
                                        <p className={`text-2xl font-bold`}>{element.title}</p>
                                        <p className={`font-sans`}>{element.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                </section>
                <section className={`w-[100%] flex justify-center items-center`}>
                    <Business Team={Team1} />
                </section>
                <section className={`w-[100%] flex justify-center items-center my-36`}>
                    <Expert expert={EpertPicture}/>
                </section>
                    <Looking/>
                <section className='w-full flex flex-col justify-center items-center py-[5rem]'>
                    <Prices/>
                </section>
                <section className="w-full flex justify-center items-center mb-10">
                    <GirlPub/>
                </section>
            </div>
    </>
    );
};

export default Domains;