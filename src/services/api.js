import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dungeon-seeker.firebaseio.com'
})

export async function getClasses() {
  return await api.get('/classes.json')
};

export async function getClass(id) {
  return await api.get(`/classes/${id}.json`)
};

export default api