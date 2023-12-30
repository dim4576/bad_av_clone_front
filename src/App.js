import Custom_app from "./Custom_app";
import "./styles/style.css"
import async from "async";
import axios from "axios";
import {useState} from "react";
import ElevateAppBar from "./navbar";

const API_URL = "https://catfact.ninja/breeds"


function App() {
    const [eelements, setElements] = useState([])
    async function getElements() {
        const response = await axios(API_URL)
        setElements(response.data.data)
    }

    return (
        <div className="App">
            <ElevateAppBar gen_button=<button onClick={getElements}>refresh</button> hello=<h1>hello world</h1> app=<Custom_app eelements={eelements}/>/>
        </div>
    );
}

export default App;
