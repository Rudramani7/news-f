import axios from 'axios';

const URL = 'https://news-b-clone.herokuapp.com/';

export const getNews = async (page, size = 5) => {
    try {
        return await axios.get(`${URL}/news?page=${page}&size=${size}`);
    } catch (error) {
        console.log('Error while calling getNews API',error);
    }
}