import React from 'react';
import Banner from './Banner';

function Header() {
    return (
        <div className="header">
            <h1>Hello Header</h1>
            <Banner name= "Subham" />
            <img src="./vercel.svg" />
        </div>
    )
}

export default Header
