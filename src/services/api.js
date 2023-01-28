import axios from 'axios'

const api = axios.create({
    baseURL:'https://api.football-data.org/v4/competitions/WC',
    headers:{
        'X-Auth-Token':'5afa385de30b461787b50e1341ef0a2c'
    }
})

export default api;


/**
 var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://v3.football.api-sports.io/{endpoint}',
  headers: {
    'x-rapidapi-key': 'XxXxXxXxXxXxXxXxXxXxXxXx',
    'x-rapidapi-host': 'v3.football.api-sports.io'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
 */