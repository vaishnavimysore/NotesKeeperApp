import react from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import notesdata from "../src/notes";

function App(){
return(<div>
    <Header/>
    
    {notesdata.map(data => (
    <Note
    key = {data.key}
    title = {data.title}
    notes = {data.content}
    />
    ))}

    <Footer/>
</div>);
}




export default App;