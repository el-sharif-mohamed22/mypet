import axios from 'axios'
const BASEURL = 'http://localhost:8080'

export async function staffSignUp(credentials) {
  return axios.post(`${BASEURL}/staffs/signUp/${credentials.shelter}`, {
    email: credentials.email,
    password: credentials.password,
    name: credentials.name,
    contact: credentials.phone,
    role: credentials.role
  })
}

export async function adopterSignUp(credentials) {
  return axios.post(`${BASEURL}/adopters/signUp`, {
    email: credentials.email,
    password: credentials.password,
    name: credentials.name,
    contact: credentials.phone
  })
}

export async function staffSignIn(credentials) {
  return axios.post(`${BASEURL}/staffs/logIn`, {
    email: credentials.email,
    password: credentials.password
  })
}

export async function adopterSignIn(credentials) {
  return axios.post(`${BASEURL}/adopters/logIn`, {
    email: credentials.email,
    password: credentials.password
  })
}
