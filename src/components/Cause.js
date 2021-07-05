export default function Cause(props) {
    console.log(props.list)
    const listToShow = props.list.map((item) => {
        return <div style={{cursor: "pointer"}} onClick={()=>{props.setDisplay(item)}} key={item}>{item}</div>
    })
    return (
        <div>
            <h1>Causes</h1>
            {listToShow}
        </div>
    )
}
