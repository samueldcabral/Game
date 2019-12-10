import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/api/',
  /* headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Acces-Control-Allow-Origin': '*' 
  } */
})

export async function getClasses() {
  return await api.get('/classes')
};

export async function getClass(id) {
  return await api.get(`/classes/${id}`)
};

export async function getSeekerByName(username) {
  return await api.get(`seekers/${username}`,{ crossdomain: true })
};

export async function getSeekerCardByName(username) {
  return await api.get(`/seeker-card/${username}`, { crossdomain: true })
};

export async function createSeeker(seeker) {
  console.log("caiu no post")
  return await api.post(`/seekers`, {
    headers: {"Access-Control-Allow-Origin": "*"},
    seeker
  })
}

export async function createSeekerCard(seekerCard) {

  return await api.post(`/seeker-card`, {
    headers: {"Access-Control-Allow-Origin": "*"},
    seekerCard
  })
}

export default api