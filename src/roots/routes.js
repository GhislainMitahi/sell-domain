import React from 'react';
// import styles from './root.module.css'
import { Link } from 'react-router-dom';


const Routes = () => {
    return (
        <div className=" w-full flex justify-between items-center ">
            <Link to="/"> home </Link>
            <p className={`w-[20%] flex justify-around items-center`}>
                <Link to="/manage"> Sign In </Link>
                <Link to="/count" className={`bg-[orange] p-2 rounded-md text-slate-900`}> Get start </Link>
            </p>
        </div>
    );
};
export default Routes;