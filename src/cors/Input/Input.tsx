import React from 'react';

interface InputElement {
  warning?: string;
  label: string;
  key?: number
}

export default function Input ({warning, label, key} : InputElement) {
    return (
        <div className=" flex flex-col gap-4" key={key}>
            <label className='text-gh-blue font-semibold'>
                { label }
            </label>
            <div className='flex flex-col'>
                <input type="text" className='w-full border border-gh-blue h-10 rounded-md text-gh-blue px-2 text-sm' />
                <p className='text-sm w-[60%] text-gray-500 font-serif italic'>{ warning }</p>
            </div>
        </div>
    );
};
