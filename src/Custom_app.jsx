import React from "react";
import Custom_element from "./Custom_element";

const Custom_app = ({eelements}) => {
    if (!eelements.length) {
        return <h1>елементов нет</h1>
    }
    console.log("[X]", eelements)
    return (
        <div>
            {
                eelements.map(eelement => <Custom_element eelement = {eelement} key = {eelement.id}/>)
            }
        </div>
    )
};
export default Custom_app