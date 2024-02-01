import React from "react";
import ContentRaw from "./ContentRaw";

const ContentTable = ({content}) => {
    console.log('[X]-> зашли в таблицу')
    let len = content.length;
    let res = [];
    const lenraw = 6
    for (let i = 0; i < len / lenraw; i++) {
        let pattern = [...new Array(lenraw)].map((x, index) => content[i * lenraw + index] ? content[i * lenraw + index] : <div></div>)
        res.push(<ContentRaw contentItems={pattern} key={i}/>)
    }
    console.log(res)
    return (
        <div>
            <table>
                <thead></thead>
                <tbody>
                {res}
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    )
}

export default ContentTable