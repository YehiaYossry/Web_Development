import { useState } from "react"
function Comment({name,text}){
       const[likescounter , setlikescounter]= useState(0);
   
       function addlike (){
            setlikescounter(likescounter+1)
        }

    

    return(
        <div className="comment">
            <div className="avatar">{name[0]}</div>
            <div className="bubble">
            <h3>{name}</h3>
            <p>{text}</p>
            <button onClick={addlike}>♥ {likescounter}</button>
            </div>
        </div>
    )
}

export default Comment