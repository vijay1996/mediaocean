import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function DealsView(props) {
    const [imageStack, setImageStack] = useState([])
    let dupImageStack = []
    useEffect(()=>{
        if(props.info.media) {
            for (let i = 0; i < props.info.media.length; i++){
                dupImageStack.push(<img key={props.info.media[i]} src = {props.info.media[i]} />)
            }
            setImageStack(dupImageStack)
            console.log(imageStack)
        }
    }, [props.info.media])
    
    return (
        <div>
            <h1>Info</h1> 
            <Link to="/edit" className="btn btn-primary">Edit</Link> <br/>
            Deal Id: {props.info.key} <br/>
            Title: {props.info.title} <br/>
            Price: {props.info.price} <br/>
            Images: <br/> {imageStack} <br/>
        </div>
    )
}
