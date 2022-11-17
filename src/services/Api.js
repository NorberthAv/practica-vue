import axios from 'axios'

export default () =>{

    return axios.created({
        baseURL:'https://jsonplaceholder.typicode.com',
        Headers:{
            'accept':'application/json',
            'content-type':'application/json'
        }
    })

}