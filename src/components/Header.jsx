import React from 'react';
import Logo from '../assets/logo.svg?react';
import Navigation from "./Navigation.jsx";

const Header = () => {
    return (
        <header className={'flex'}>
            <Logo/>
            <Navigation/>
        </header>
    );
};

export default Header;