import axios from 'axios';

export const get = (url) => {
  return axios({
    method: 'GET',
    url
  }).then(res => {
    return res.data
  }).catch(error => {
    console.error(`Request failed. Url = ${url}. Message = ${error}`)
    return Promise.reject({error: {message: "Request failed."}})
  })
}