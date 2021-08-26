import React from 'react';
import Note from '../components/Note'




const Notes=({notes})=>{


    return(
        <div>
            
            {
                notes.map((note,index)=>(
                    <Note 
                        description={note.description}
                        key={index}
                        done={note.done}
                    />
                ))
            }
        
        </div>

    )
}


export default Notes


