import React from 'react';

const NavigationItemList = ({items = []}) => {
    return (
        <div
            className={'flex flex-col px-4 py-2 bg-almost-white drop-shadow rounded-lg absolute top-10 right-0 w-36 space-y-2 z-30'}>
            {items.map(({text, icon}) =>
                <div className={'flex w-full space-x-4'}
                    key={text}>
                    <img src={icon} alt={icon}/>
                    <span className={'text-medium-gray hover:text-almost-black cursor-pointer'}>{text}</span>
                </div>
            )}
        </div>
    );
};

export default NavigationItemList;