/**
    Author: Filipe Bomfim Santos Furtado
    File: api.js
    Description: 
        Configuração do axius para as requisições da api
  */ 

/** Importação do axios */
import axios from 'axios'

/** Criação do axios, contendo a url base da api e o token de autorização para as requisições */
const api = axios.create({
    baseURL:'https://api.football-data.org/v4/competitions/WC',
    headers:{
        'X-Auth-Token':'5afa385de30b461787b50e1341ef0a2c'
    }
})

export default api;