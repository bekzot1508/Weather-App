import axios from "axios";

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'

const options = {
  
  params: {part: 'snippet', videoId: 'M7FIvfx5J10'},
  headers: {
    'X-RapidAPI-Key': 'e3045c5810mshed7324315667326p10f48djsn5230c17d2c1e',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};



export const ApiService = {
    async fetching(url) {
      const response = await axios.get(`${BASE_URI}/${url}`, options)
      return response
    },
}