import React from 'react';
import Footerr from './Footer';
import Header from './Header';

const Layout = (props) => {
    return (
        <>
        <div className='wrapper'>
        <Header />
        {props.children}
        <div className='push'></div>
        </div>
        <Footerr />
        </>
    );
}

export default Layout;
