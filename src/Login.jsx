import React, {useState} from "react";
import ElevateAppBarUniversal from "./navUniversal";
//import {useNavigate} from 'react-router-dom';
import axios from "axios";


const Content = ({setToken}) => {
    //const navigate = useNavigate();
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit1() {
        alert('submit')
        const url = `http://127.0.0.1:8000/api-token-auth/`

        let data = {
            username: login,
            password: password
        }

        axios.post(url, data).then((response)=> {
            localStorage.setItem('token', response.data.token);
            setToken(response.data.token)
        })
    }

    const handleSubmit = () => {
        console.log(login, password)
        localStorage.setItem('token', 'bulbachka')
        setToken('bulbachka')
    }

    return (
        <form onSubmit={handleSubmit1}>
            <label>
                введите логин:
                <input type="text" name="login" onChange={(e) => {
                    setLogin(e.target.value)
                }}/>
                <br/>
                введите пароль:
                <input type="password" name="password" onChange={(e) => {
                    setPassword(e.target.value)
                }}/>
            </label>
            <input type="submit" name="submit"/>
            <br/>
        </form>
    )
}


const Login = ({setToken}) => {
    alert('enter login')
    return (
        <ElevateAppBarUniversal content={<Content setToken={setToken}/>}
        />
    )
}

export default Login