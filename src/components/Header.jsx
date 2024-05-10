import React from 'react';
//components
import Logo from '../assets/logo.svg?react';
import Navigation from "./Navigation.jsx";
import Button from "../UI/Button.jsx";

const Header = () => {
    return (
        <header className={'flex items-center'}>
            <Logo/>
            <Navigation/>
            <div className={'flex ml-auto space-x-5'}>
                <Button>
                    Login
                </Button>
                <Button hasBorder={true}>
                    Register
                </Button>
            </div>
        </header>
    );
};

export default Header;