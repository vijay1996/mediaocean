import React, {useState, useEffect} from 'react'

export default function Edit(props) {
    const [title, setTitle] = useState(props.info.title)
    const [price, setPrice] = useState(props.info.price)
    const [images, setImages] = useState(props.info.media)
    let tempImage = ""
    if (props.info.images) {
        for (let i = 0; i < props.info.images.length; i++) {
            tempImage += props.info.images[i]
            console.log(images)
        }
    }
    function handleClick() {
        let deals = props.deals
        for(let i = 0; i < deals.length; i++){
            if (deals.key === props.info.key) {
                deals[i].title = title
                deals[i].price = price
                deals[i].images = images.split(',')
                props.setDeals(deals)
            }
        }
        alert("saved")
        window.location.replace("/")
    }
    return (
        <div style={{padding: "5%"}}>
            <h1>Edit the deal</h1>
            <br/>
            <div className="row">
                <div className="col-md-2">Title:</div>
                <div className="col-md-10"><input className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} /></div>
            </div> 
            <br/>
            <div className="row">
                <div className="col-md-2">Price:</div>
                <div className="col-md-10"><input className="form-control" value={price} onChange={(e)=>{setPrice(e.target.value)}} /></div>
            </div> 
            <br/>
            <div className="row">
                <div className="col-md-2">Images:</div>
                <div className="col-md-10"><input className="form-control" value={images} onChange={(e)=>{setImages(e.target.value)}} /></div>
            </div> 
            <br/>
            <button className="btn btn-primary" onClick={()=>{handleClick()}}>Save</button>
        </div>
    )
}
