'use client'

import { Category } from "@/types/question";
import axios from "axios";
import useSWR from "swr";


const fetcher = (url: string) => axios.get(url).then(res => res.data.trivia_categories);

const UseCategory = () => {

    const { data, error, isLoading } = useSWR<Category[]>(
        `https://opentdb.com/api_category.php`,
        fetcher, {
        revalidateOnFocus: false,        // يعيد الجلب عند ترك ورجوع التبويبة
        revalidateOnReconnect: false,    // يعيد الجلب عند فقدان وعودة الاتصال
        refreshInterval: 30000          // يعيد الجلب كل 30 ثانية تلقائيًا
    }
    );

    return {
        categories: data || [],
        isLoading,
        error
    };

    
}

export default UseCategory;
