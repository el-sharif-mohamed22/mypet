import axios from 'axios'
const BASEURL = 'http://localhost:8080/admins'

export async function logIn(admin) {
  const res = await axios.post(`${BASEURL}/logIn`, admin)
  return res
}

export async function addShelter(adminId, shelter) {
  const res = await axios.post(`${BASEURL}/addShelter/${adminId}`, shelter)
  return res
}

export async function updateShelter(adminId, shelter) {
  const res = await axios.post(`${BASEURL}/updateShelter/${adminId}`, shelter)
  return res
}
