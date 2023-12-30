import axios from 'axios'
const BASEURL = 'http://localhost:8080/applications'

export async function getApplications() {
  const res = await axios.get(`${BASEURL}`)
  return res
}

export async function applyApplication(adopterId, petId, application) {
  const res = await axios.post(`${BASEURL}/apply/${adopterId}/${petId}`, application)
  return res
}

export async function acceptApplication(applicationId, staffId) {
  const res = await axios.put(`${BASEURL}/acceptApplication/${applicationId}/${staffId}`)
  return res
}

export async function rejectApplication(applicationId, staffId) {
  const res = await axios.put(`${BASEURL}/rejectApplication/${applicationId}/${staffId}`)
  return res
}

export async function getStaffApplications(staffId) {
  const res = await axios.get(`http://localhost:8080/staffs/getApplications/${staffId}`)
  return res.data
}
