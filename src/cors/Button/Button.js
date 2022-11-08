import React from 'react';

const defaultBtnName = {
    name: 'Button'
}
const Button = ({ btn = defaultBtnName}) => {
    return (
        <>
            <div className={`flex justify-center items-center p-2 bg-gh-blue text-white rounded-xl font-600 text-lg border border-white hover:bg-white hover:text-gh-blue hover:border hover:border-gh-blue ease-in-out duration-150`}>
                <button>{btn.name}</button>
            </div>
        </>
    );
};

export default Button;