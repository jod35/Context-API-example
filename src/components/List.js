import React, { useContext } from "react";
import Note from "./Note";
import NotesContext from '../context/notescontext'





const List=()=>{

    const notes=useContext(NotesContext)


    return(
        <div className="list">


            <h1>The list component</h1>

            {
                notes.map((note,index)=>(
                    <Note description={note.description}
                        done={note.done}
                        key={index}    
                    />
                ))
            }
        </div>
    )
}


export default List