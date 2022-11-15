import React from 'react';

const Icons = () => {

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
        <div className={`w-full flex justify-center items-center`}>
            <ul className="grid grid-cols-3 grid-flow-rows gap-4">
              {groupImage.map((partImage) => (
                 <li className=" flex justify-center  items-center bg-[#FFF6E5] rounded-md">
                <img src={partImage} alt="" className='h-[80%] w-[80%]'/>
              </li>
              ))}
            </ul>
          </div>
    );
};

export default Icons;