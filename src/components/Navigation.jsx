import React from 'react';
import NavigationItem from "./NavigationItem.jsx";
import NavigationItemList from "./NavigationItemList.jsx";
import {COMPANY, FEATURES} from "../constants/constants.js";

const Navigation = () => {
    return (
        <nav className={'flex space-x-6 ml-8 items-center'}>
            <NavigationItem text={'Feature'}>
               <NavigationItemList items={FEATURES}/>
            </NavigationItem>
            <NavigationItem text={'Company'}>
                <NavigationItemList items={COMPANY}/>
            </NavigationItem>
            <NavigationItem text={'Careers'}/>
            <NavigationItem text={'About'}/>
        </nav>
    );
};

export default Navigation;