'use client'

import React, { createContext, ReactNode, useContext, useState } from 'react';


interface CategoryProps {
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>
}

const CategoryContext = createContext<CategoryProps | undefined>(undefined)

const CategoryProvider = ({children} : {children : ReactNode}) => {

    const [category, setCategory] = useState<string>("");

    return (
        <CategoryContext.Provider value={{category, setCategory}}>
            {children}
        </CategoryContext.Provider>
    );
}

export const useQuiz = () : CategoryProps => {
    const context = useContext(CategoryContext);
    if(!context) throw new Error("There are error in category selection !!")
    return context;
}

export default CategoryProvider;
