// A mock function to mimic making an async request for data
import axios from 'axios'
const SERVER ="http://127.0.0.1:8000/login"
export function login(cred) {
    console.log(cred);
    
  return axios.post(SERVER,cred)
}
