import React from "react";
import ContentCel from "./ContentCel";

const ContentRaw = ({contentItems, key}) => {
    console.log('[X]-> зашли в строку')
    let res = [];
    for (let i = 0; i < contentItems.length; i++) {
        res.push(
            <ContentCel contentItem={contentItems[i]}/>
        )
    }
    return (
        <tr>
            {res}
        </tr>
    )
}

export default ContentRaw