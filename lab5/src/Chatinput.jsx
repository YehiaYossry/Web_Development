import { useState } from "react"

function ChatInput(props) {
    const commentlist=props.commentlist
    const setcommentList = props.setcommentList

    const[input , setInput]= useState("")
    
    function saveInput(event){
        setInput(event.target.value)
    }

    function addComment(){
        setcommentList([...commentlist,{text:input , sender:"You"}])
        setInput("")
    }
       
return (
    <div className="comment_field">
     <h1>Comments</h1>
     <input placeholder="Write a Comment..." maxLength={30} value={input} onChange={saveInput}/>
     <button onClick={addComment}>Post</button>
    </div>
    )
}
export default ChatInput