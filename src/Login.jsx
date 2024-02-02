import React, {useState} from "react";
import ElevateAppBarUniversal from "./navUniversal";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Content = ({setToken}) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    async function handleSubmit(event) {


        event.preventDefault()
        const url = 'http://127.0.0.1:8000/api-token-auth/';
        axios.defaults.timeout = 500
        let response = {}
        let error = {}
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: url,
            data: {
                'username': login,
                'password': password
            }
        }

        response = await axios.request(config)
        console.log('[befor read]', response, error)
        localStorage.setItem('token', response.data.token);
        setToken(response.data.token)
        setPassword('')
        setLogin('')
        navigate('/login')

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                введите логин:
                <input type="text" name="login" value={login} onChange={(e) => {
                    setLogin(e.target.value)
                }}/>
                <br/>
                введите пароль:
                <input type="password" name="password" value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }}/>
            </label>
            <input type="submit" name="submit"/>
            <br/>
        </form>
    )
}


const Login = ({setToken}) => {
    //alert('enter login')
    return (
        <ElevateAppBarUniversal content={<Content setToken={setToken}/>}
        />
    )
}

export default Login