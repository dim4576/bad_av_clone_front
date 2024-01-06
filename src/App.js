import Custom_app from "./Custom_app";
import "./styles/style.css"
import async from "async";
import axios from "axios";
import {useState} from "react";
import ElevateAppBar from "./navbar";
import MediaCard from "./card";

const API_URL = "http://127.0.0.1:8000/cars/car/"
let first = true

function App() {

    const firstRun = (first) => {
        if (first){
            getElements().then();
            first = false
            console.log('первый раз')
        }
        else {
            console.log('остальные разы')
        }
        return first
    }
    const [elements, setElements] = useState([])

    async function getElements() {
        const response = await axios(API_URL)
        setElements(response.data)
    }
    first = firstRun(first)
    console.log('[X] --> ')
    console.log(elements)
    return (
        <div className="App">
            <ElevateAppBar
                gen_button=<button onClick={getElements}>refresh</button>
            hello=<h1>hello world</h1>
            elems={elements}
            key = {elements.id}

            />
        </div>
    );
    //gen_button=<button onClick={getElements}>refresh</button>
    //app=<Custom_app eelements={eelements}/>
    //card=<MediaCard/>
}

export default App;
