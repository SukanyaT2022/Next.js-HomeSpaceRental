import axios from 'axios';// we need this line  to work -
//  do not forget to install -- npm install axios 

export const hotelData = async() =>{
    const options = {
        method: 'GET',
        url: 'https://airbnb-data.p.rapidapi.com/WebAPIs/airbnb/autocomplete',
        params: {
          query: 'Wayland, IA',
          locale: 'en',
          currency: 'USD'
        },
        headers: {
          'x-rapidapi-key': '15fcc0d37fmsh3bf12e35ad48a70p1ef3b4jsn5f0fdfdd97ca',
          'x-rapidapi-host': 'airbnb-data.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          return response.data;//we need to return data to home.js -- 
         //also we need to export on the top--we see awit we need to pus async
          
      } catch (error) {
          console.error(error);
      }
    }

export const hotelData2 = async() =>{
    const options = {
        method: 'GET',
        url: 'https://airbnb-data.p.rapidapi.com/WebAPIs/airbnb/autocomplete',
        params: {
            query: 'Wayland, IA',
            locale: 'en',
            currency: 'USD'
        },
        headers: {
            'x-rapidapi-key': '15fcc0d37fmsh3bf12e35ad48a70p1ef3b4jsn5f0fdfdd97ca',
            'x-rapidapi-host': 'airbnb-data.p.rapidapi.com'
        }
        };
        
        try {
            const response = await axios.request(options);
            return response.data;//we need to return data to home.js
            
        } catch (error) {
            console.error(error);
        }
    }


    // MERN (Mongo React|NEXT Node.js)
    // LAMP (Laraverl Vue.js mysql)