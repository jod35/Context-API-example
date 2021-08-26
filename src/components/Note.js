import React from 'react';



const Note=({description,done})=>{
    return(
        <div>
            <h1>{description}</h1>
            {done?"Done":"Not done"}
        </div>
    )
};


export default Note
