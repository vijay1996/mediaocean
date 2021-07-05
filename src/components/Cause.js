import {useState, useEffect} from 'react'

export default function Cause(props) {
    console.log(props.list)
    const listToShow = props.list.map((item) => {
        return <div key={item}>{item}</div>
    })
    return (
        <div>
            {listToShow}
        </div>
    )
}
