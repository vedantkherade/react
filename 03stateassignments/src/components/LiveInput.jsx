import { useState } from "react"

function LiveInput(){
    const [text, settext] = useState();
    
    return(
        <>
         <h2>Assignment 4 — Live Preview Input</h2>
         <input type="text" value={text} onChange={(e) => settext(e.target.value)}/>
         <p>You typed : {text}</p>
        </>
    )
}

export default LiveInput