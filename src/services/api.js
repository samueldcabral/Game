import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/api/'
})

export async function getClasses() {
  return await api.get('/classes')
};

export async function getClass(id) {
  return await api.get(`/classes/${id}`)
};

export default api