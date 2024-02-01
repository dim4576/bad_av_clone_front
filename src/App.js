import "./styles/style.css"
import axios from "axios";
import {useState} from "react";
import ElevateAppBar from "./navbar";
import ElevateAppBarUniversal from "./navUniversal";
import {Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';

const API_URL = "http://127.0.0.1:8000/cars/car/"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    );
}

const About = () => {
    return (
        <ElevateAppBarUniversal content=<h1>О нас</h1>
    />
    )
}

function Home() {
    console.log('[home] -> enter')

    const [elements, setElements] = useState(() => {
        getElements().then()
        return []
    })

    async function getElements() {
        const response = await axios(API_URL)
        setElements(response.data)
        console.log('[from getElements] => ', response.data)
    }

    return (
        <>
            <ElevateAppBar gen_button=
                               <button onClick={getElements}>refresh</button>
            hello = <h1>hello world</h1>
            elems = {elements}
            key = {elements.id}
            />
        </>
    )
}

export default App;
