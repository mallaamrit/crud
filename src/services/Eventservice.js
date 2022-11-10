import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/mallaamrit/apirepo',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  //perPage = Events to return per page & page=The page we're on
  getEvents() {
    return apiClient.get('/events') 
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  }
}