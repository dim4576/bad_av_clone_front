import React from "react";
import CustomElement from "./CustomElement";

const Custom_app = ({eelements}) => {
    if (!eelements.length) {
        return <h1>елементов нет</h1>
    }
    console.log("[X]", eelements)
    return (
        <div>
            {
                eelements.map(eelement => <CustomElement eelement = {eelement} key = {eelement.id}/>)
            }
        </div>
    )
};
export default Custom_app