import React from "react";
import ContentRaw from "./ContentRaw";

const ContentTable = ({content}) => {
    console.log('[X]-> зашли в таблицу')
    let len = content.length;
    let res = [];
    for (let i = 0; i < len / 4; i++) {
        let pattern = [...new Array(4)].map((x, index) => content[i * 4 + index] ? content[i * 4 + index] : <div></div>)
        res.push(<ContentRaw contentItems={pattern} key={i}/>)
    }
    console.log(res)
    return (
        <div>
            <table>
                <tbody>
                {res}
                </tbody>
            </table>
        </div>
    )
}

export default ContentTable