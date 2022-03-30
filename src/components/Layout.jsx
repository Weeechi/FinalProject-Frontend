import React from 'react';
import Footerr from './Footer';
import Header from './Header';

const Layout = (props) => {
    return (
        <div>
        <Header />
        {props.children}
        <Footerr />
        </div>
    );
}

export default Layout;
