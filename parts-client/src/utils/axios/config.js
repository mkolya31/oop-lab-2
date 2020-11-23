import axios from 'axios'

import { backendUrl } from '../env'

export let axiosBackend

export const prepareAxios = () => {

    axiosBackend = axios.create({
        baseURL: 'http://localhost:8080',
        timeout: 1000
    })

}
