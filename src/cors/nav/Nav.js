import React from 'react';
import Root from '../../roots/routes';
import logo from '../../images/log.png';
import styles from './NavStyle.module.css';


const Nav = () => { 

    return (
        <div className={`h-[80px] w-full bg-white-900 flex justify-center align-center fixed top-0 bg-white  ${styles.nav}`}>
            <div className = {`w-[95%] border border-white flex justify-between items-center`}>
                <p className = {`h-[100%] w-[15%] border border-white flex justify-center align-center`}>
                    <img src={logo} alt="" />
                </p>
                <p className={`w-[85%] flex justify-around items-center`}>
                    <Root />
                </p>
            </div>
        </div>
    );
};

export default Nav;