import axios from 'axios'
const BASEURL = 'http://localhost:8080/pets'

export async function getPets() {
  const res = await axios.get(`${BASEURL}`)
  return res
}

export async function addPet(staffId, pet) {
  const res = await axios.post(`${BASEURL}/addPet/${staffId}`, pet)
  return res
}
