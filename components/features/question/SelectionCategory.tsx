'use client'

import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useQuiz } from "@/context/CategoryProvider"
import UseCategory from "@/hooks/useCategory"

const SelectionCategory = () => {

    const {setCategory} = useQuiz();
    
    const { categories, isLoading, error } = UseCategory();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data.</p>;

    
    const onValueChange = (value : string) => {
        console.log(value);
        setCategory(value);
    }

    
    return (
        <Select onValueChange={onValueChange}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Category" />
            </SelectTrigger>
            <SelectContent className="">
                <SelectGroup >
                    <SelectLabel >Category</SelectLabel>
                    {categories.map((cate) => (
                        <SelectItem key={cate.id} value={cate.id.toString()}>{cate.name}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}


export default SelectionCategory;