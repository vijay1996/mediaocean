import React from 'react'

export default function Deals(props) {
    const listToShow = []
    for (let i = 0; i < props.list.length; i++) {
        listToShow.push(<div style={{cursor: "pointer"}} key={props.list[i].key} onClick={()=>{props.setKey(props.list[i].key)}}>{props.list[i].title}<br/><br/></div>)
    }
    return (
        <div>
            <h1>Deals</h1>
            {listToShow}
        </div>
    )
}
