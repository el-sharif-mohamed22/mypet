import axios from 'axios'
const BASEURL = 'http://localhost:8080/adopters'

export async function getNotifications(adopterId) {
  const res = await axios.get(`${BASEURL}/unreadNotifications/${adopterId}`)
  return res
}
export async function markNotificationRead(adopterId, notificationId) {
  const res = await axios.put(`${BASEURL}/makeRead/${adopterId}/${notificationId}`)
  return res
}
