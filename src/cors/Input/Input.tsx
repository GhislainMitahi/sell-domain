import React from 'react';

interface InputElement {
  warning?: string;
  label: string;
  key?: number,
    name: string, 
    // register: (params: any) => any;
}

export default function Input ({warning, label, key, name} : InputElement) {
    return (
        <div className="flex flex-col gap-4" key={key}>
            <label className='text-gh-blue font-semibold' htmlFor={name}>
                { label }
            </label>
            <div className='flex flex-col'>
                <input type="text" className='w-full border border-gh-blue h-10 rounded-md text-gh-blue px-2 text-sm' id={name} name={name} />
                <p className='text-sm w-[60%] text-gray-500 font-serif italic'>{ warning }</p>
            </div>
        </div>
    );
};
