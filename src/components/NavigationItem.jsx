import React from 'react';
//components
import ArrowDown from "../assets/icon-arrow-down.svg?react";
import ArrowUp from "../assets/icon-arrow-up.svg?react";

const NavigationItem = ({text, children}) => {

    const [selected, setSelected] = React.useState('');

    return (
        <div className={'relative'}>
            <div className={'flex space-x-2 cursor-pointer items-center'}>
                <span
                    className={'text-medium-gray hover:text-almost-black'}
                    onClick={() => children && setSelected(text !== selected ? text : '')}
                >
                    {text}
                </span>
                {children && selected !== text && <ArrowDown/>}
                {children && selected === text && <ArrowUp/>}
            </div>
            {selected && children}
        </div>
    );
};

export default NavigationItem;