import React, {useState} from "react";
import ElevateAppBarUniversal from "./navUniversal";
//import {useNavigate} from 'react-router-dom';
import axios from "axios";

const Content = ({setToken}) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')


    async function handleSubmit() {
        const url = 'http://127.0.0.1:8000/api-token-auth/';
        //axios.defaults.withCredentials = true
        axios.defaults.timeout = 10000
        //axios.defaults.headers.post["Content-Type"] = 'application/x-www-form-urlencoded'
        axios.options(url).then((re) => {
            console.log(re.headers, re.data)
            //alert('options')
        }).catch((err) => {
            console.log(err)
            alert('options with err, check console')
        })
        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: url,
            data: {
                'username': login,
                'password': password
            }
        }


        axios.request(config
        ).then((response) => {
            //alert('check console with pass')
            localStorage.setItem('token', response.data.token);
            setToken(response.data.token)
            console.log(response.data)
            //alert('check console with pass')
        }).catch((err) => {
                console.log(err);
                alert('check console with fail')
            }
        )
    }

    return (
        <form onSubmit={handleSubmit}>
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
    //alert('enter login')
    return (
        <ElevateAppBarUniversal content={<Content setToken={setToken}/>}
        />
    )
}

export default Login