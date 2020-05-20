import axios from 'axios'


export const login = user => {
  return axios
    .post('users/login')
    .then((res) => {
    
      return res.data
    })
    .catch(err => {
      alert("not ok")
    })
}