import axios from "axios";


export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'c31870a386mshb4007485b52877ap141aebjsn61afe95ad517',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }

    })

    return data
}