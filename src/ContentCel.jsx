import React from "react";

const ContentCel = ({contentItem}) => {

    console.log('[X]-> зашли в ячейку')
    console.log(contentItem.render)
    return (
        <td>
            <div>
                {contentItem}
            </div>
        </td>
    )
}

export default ContentCel