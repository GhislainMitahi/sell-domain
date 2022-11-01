import React from 'react';
import { Link } from 'react-router-dom';


const Routes = () => {
    return (
        <div className="flex justify-center items-center gap-7">
            <Link to="/"> home </Link>
            <Link to="/manage"> Sign In </Link>
            <Link to="/count"> Get start </Link>
        </div>
    );
};

export default Routes;