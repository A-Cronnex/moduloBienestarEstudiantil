import axios from 'axios'

const URL_API = 'http://127.0.0.1:8000/api/'
const LOGIN_URL = 'http://127.0.0.1:8000/api/token/'
const REFRESH_URL = `${URL_API}token/refresh/`
const LOGOUT_URL = `${URL_API}logout/`
const AUTH_URL = `${URL_API}authenticated/`

export const login = async (username, password) => {
    const response = await axios.post(LOGIN_URL,
        {username:username, password:password},{withCredentials:true}
    )
    return response.data.success
}

export const refresh_token = () => {
    try {
    const response = axios.post(REFRESH_URL,
        {},
        {withCredentials: true}
    )

    return response.data.refreshed
    } catch(error){
        return false
    }
}

const call_refresh = async (error, func) => {
    if (error.response && error.response.status === 401){
        const tokenRefreshed = await refresh_token();
        if (tokenRefreshed){
            const retryResponse = await func();
            return retryResponse.data
        }
    }
    return false
}

export const logout = async () => {
    const response = await axios.post(LOGOUT_URL,
        {},
        {withCredentials: true}
    )

}

export const is_authenticated = async () => {
    try {
        await axios.post(AUTH_URL, {}, {withCredentials: true} )
        return true
    } catch(error) {
        return false
    }
}