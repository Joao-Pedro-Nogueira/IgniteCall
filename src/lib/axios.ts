import axios from 'axios'

export const api = axios.create({
  baseURL: '/api', // Aqui estamos lidando com uma rota que já está no front-end, portanto, já está no localhost:3000
})
