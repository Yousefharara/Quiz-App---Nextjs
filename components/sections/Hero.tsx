import Image from 'next/image';
import React from 'react';
import SelectionCategory from '../features/question/SelectionCategory';
import SwitchButton from '../features/question/SwitchButton';

const Hero = () => {
    return (
        <header className='w-full min-h-screen flex justify-center items-center'>
            <div className='flex items-center flex-wrap-reverse justify-center '>
                <div className='min-w-xs h-48 flex flex-col gap-8 items-center'>
                    <h1 className='w-fit mx-auto text-3xl font-semibold text-orange-950'>Welcome to Quiz Answer</h1>
                    <SelectionCategory />
                    <SwitchButton />
                </div>
                <Image
                    src={"/images/question.png"}
                    width={600}
                    height={400}
                    alt="Questions"
                    className=''
                />
            </div>
        </header>
    );
}

export default Hero;
