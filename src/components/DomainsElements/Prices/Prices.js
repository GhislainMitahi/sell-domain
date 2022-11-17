import React from 'react';

const Prices = () => {
    const importAll = (r) => {
    let images = {};
    r.keys().map(item => { return images[item.replace('./', '')] = r(item); });
    return images;
}
    const PriceImg = importAll(require.context('../../../images/DomainsGroup', false, /.webp/));
    
    return (
            <div className='w-[90%] flex gap-8'>
            <div className='w-[50%] flex gap-4'>
                <div className={`flex flex-col gap-4 h-[700px] w-[50%] pt-10`}>
                    <div className='bg-[#FFF6E5] flex flex-col just-center items-center gap-2 py-4 rounded-lg'>
                            <img src={PriceImg['dom1.webp']} alt="" className='w-[50%]'/>
                        <p className={`text-lg`}>From $5.00</p>
                    </div>
                     <div className='bg-[#FFF6E5] flex flex-col just-center items-center gap-2 py-4 rounded-lg'>
                            <img src={PriceImg['dom3.webp']} alt="" className='w-[50%]'/>
                        <p className={`text-lg`}>From $5.00</p>
                    </div>
                    <div className='bg-[#FFF6E5] flex flex-col just-center items-center gap-2 py-4 rounded-lg'>
                            <img src={PriceImg['dom5.webp']} alt="" className='w-[50%]'/>
                        <p className={`text-lg`}>From $5.00</p>
                    </div>
                    <div className='bg-[#FFF6E5] flex flex-col just-center items-center gap-2 py-4 rounded-lg'>
                            <img src={PriceImg['dom7.webp']} alt="" className='w-[50%]'/>
                        <p className={`text-lg`}>From $10.00</p>
                    </div>
                </div>
                <div className={`flex flex-col gap-4 h-[700px] w-[50%]`}>
                    <div className='bg-[#FFF6E5] flex flex-col just-center items-center gap-2 py-4 rounded-lg'>
                            <img src={PriceImg['dom2.webp']} alt="" className='w-[50%]'/>
                        <p className={`text-lg`}>From $12.00</p>
                    </div>
                    <div className='bg-[#FFF6E5] flex flex-col just-center items-center gap-2 py-4 rounded-lg'>
                            <img src={PriceImg['dom4.webp']} alt="" className='w-[50%]'/>
                        <p className={`text-lg`}>From $3.00</p>
                    </div>
                    <div className='bg-[#FFF6E5] flex flex-col just-center items-center gap-2 py-4 rounded-lg'>
                            <img src={PriceImg['dom6.webp']} alt="" className='w-[50%]'/>
                        <p className={`text-lg`}>From $6.00</p>
                    </div>
                    <div className='bg-[#FFF6E5] flex flex-col just-center items-center gap-2 py-4 rounded-lg'>
                            <img src={PriceImg['dom8.webp']} alt="" className='w-[50%]'/>
                        <p className={`text-lg`}>From $12.00</p>
                    </div>
                </div>
          </div>
            <div className='w-[50%] flex flex-col justify-center items-start gap-8'>
              <p className='text-gh-blue text-5xl font-bold w-[85%]'>Wholesale
                <span className='text-[orange]'> domain prices</span> 
                </p>
                <p className={`text-lg`}>We understand that you are looking for affordable domain prices. This is why we offer transparent and
                    tier-based pricing, helping you leverage discounts as you grow.
                </p>
                <p className={`text-blue-700 font-semibold`}>View TLD pricing</p>
            </div>
          </div>
    );
};

export default Prices;