'use client'

import UseQuestion from '@/hooks/useCategory';
import React from 'react';

const Page = () => {

    const {categories, error, isLoading} = UseQuestion();

    if(isLoading) return <p>Loading ....</p>

    if(error) return <p>Error ...</p>


    return (
        <div className='w-full'>
            <ul className='flex flex-col max-h-36 max-w-xs'>
                {categories.map((category) => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
            
        </div>
    );
}

export default Page;
