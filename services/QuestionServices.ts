
import axios from "axios";

export async function getQuestionsByCategory(category: string)  {
    const res = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}`)
    const data = await res.data;
    return data.results;    
}

export async function getCategories() {
    const res = await axios.get('https://opentdb.com/api_category.php')
    const json = await res.data;
    const data = json.trivia_categories;
    return data;
}
