'use client'

import { Question } from "@/types/question";
import axios from "axios";
import useSWR from "swr";


const fetcher = (url: string) => axios.get(url).then(res => res.data.results);


const UseQuestion = (category: string) => {

    const { data, error, isLoading } = useSWR<Question[]>(
        category ? `https://opentdb.com/api.php?amount=10&category=${category}` : null,
        fetcher, {
        revalidateOnFocus: false,        // يعيد الجلب عند ترك ورجوع التبويبة
        revalidateOnReconnect: false,    // يعيد الجلب عند فقدان وعودة الاتصال
        refreshInterval: undefined
    }
    );

    return {
        questions: data || [],
        isLoading,
        error
    };

}

export default UseQuestion;
