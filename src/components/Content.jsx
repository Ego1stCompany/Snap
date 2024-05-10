import React from 'react';
import MenImage from '../assets/image-hero-desktop.png?react'
import MenImageMobile from '../assets/image-hero-mobile.png?react'
import Databiz from '../assets/client-databiz.svg?react'
import Audiophile from '../assets/client-audiophile.svg?react'
import Meet from '../assets/client-meet.svg?react'
import Maker from '../assets/client-maker.svg?react'
//components
import Button from "../UI/Button.jsx";

const Content = () => {
    return (
        <main className={'w-full flex mt-6 h-screen justify-between'}>
            <div className={'relative text-left mt-12'}>
                <h1 className='text-3xl xl:text-8xl font-black xl:whitespace-pre-line mt-6'>{`Make\n remote work`}</h1>

                <p className='text-medium-gray text-lg my-12 whitespace-pre-line'>
                    {`Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n Amet ullam dolorum animi atque vitae exercitationem\n quibusdam maiores adipisci qui harum.`}
                </p>

                <Button isFilled={true}>Learn More</Button>

                <div className="mt-20 flex justify-around xl:mt-0 xl:absolute bottom-2 xl:space-x-20">
                    <Databiz/>
                    <Audiophile/>
                    <Meet/>
                    <Maker/>
                </div>
            </div>
            <div className={'flex w-2/4 mt-20'}>
                <img src={MenImage} alt='men'/>
            </div>
            <div className="flex justify-center w-full mb-8 xl:hidden order-1">
                <img src={MenImageMobile} alt="hero"/>
            </div>
        </main>
    );
};

export default Content;