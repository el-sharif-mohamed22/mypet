import axios from 'axios'
const BASEURL = 'http://localhost:8080/shelters'

export async function getShelters() {
  const res = await axios.get(`${BASEURL}`)
  return res
}

export async function getShelterPets(shelterId) {
  const res = await axios.get(`${BASEURL}/getPets/${shelterId}`)
  return res
}

export async function getApplications(shelterId) {
  const res = await axios.get(`${BASEURL}/getApplications/${shelterId}`)
  return res
}

export async function getSheltersAsOptions() {
  const res = await getShelters()
  return res.data.map((shelter) => ({
    value: shelter.shelterId,
    label: `${shelter.name} - ${shelter.location}`
  }))
}
