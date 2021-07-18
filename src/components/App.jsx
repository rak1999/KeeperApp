import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../Notes";

function App(){
    return(
        <div>
            <Header />
            {Notes.map((props) =>(
            <Note
            key = {props.key}
            title= {props.title}
            content= {props.content}
            />
            ))}
            <Footer />
        </div>
    )
}

export default App;