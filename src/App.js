import Custom_app from "./Custom_app";
import async from "async";
import axios from "axios";
import {useState} from "react";

const API_URL = "https://catfact.ninja/breeds"


function App() {
    const [eelements, setElements] = useState([])
    async function getElements() {
        const response = await axios(API_URL)
        setElements(response.data.data)
    }

    return (
        <div className="App">
            <button onClick={getElements}>refresh</button>
            <h1>hello world</h1>
            <Custom_app eelements={eelements}/>
        </div>
    );
}

export default App;
