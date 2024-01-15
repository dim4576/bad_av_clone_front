import React from "react";

const CustomElement = (props) => {
    return(
        <div className='eelement'>
            <h1>_______________________________</h1>
            <strong>
                {props.eelement.breed}
            </strong>
            <p>
                {props.eelement.country}
            </p>
            <li>
                {props.eelement.origin}
            </li>
            <p>
                {props.eelement.coat}
            </p>
            <p>
                {props.eelement.pattern}
            </p>
            <h1>_______________________________</h1>
        </div>
    )
}

export default CustomElement