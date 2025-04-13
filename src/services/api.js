import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'd6b190f550d003fe6cd57cb8834f71dc',
    language: 'pt-BR',
    page: 1
  }
})

export default api
