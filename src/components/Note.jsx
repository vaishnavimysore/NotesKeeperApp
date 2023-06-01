import react from "react";

function Note(props){
    return (
        <div className="note h1">
        <h1 className="">{props.title}</h1>
        <p className=""> {props.notes}</p>
        </div>
    );
}

export default Note;