
export default function EdItem(props){
    return(
        <>
            <div><h3>{props.school}</h3></div>
            <div>{props.subsection}</div>
            <div><strong>Location: </strong> {props.location}</div>
            <div><strong>Date: </strong> {props.date}</div>
        </>
    );
}