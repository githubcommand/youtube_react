import axios from 'axios';



const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  

  params: {
   
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPID_API,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url) =>{
const {data} = await axios.get(`${BASE_URL}/${url}`,options);
return data;
}


// async function fetchData() {
// 	try {
// 		const response = await axios.request(options);
// 		console.log(response.data);
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

// fetchData();