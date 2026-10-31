import { useState } from 'react'
import ChatInput from './Chatinput'; 
import CommentList from './Commentlist';
import './App.css'

function App() {
  const [commentlist,setcommentList]=useState([
        {text:"Great explanation of components", sender:"Sara"},
        {text:"Props finally make sense to me", sender:"Omar" },
        {text:"Can we do a lab on useState next week", sender:"Ali"},
        {text:"Thanks for the lab , this was fun !", sender:"You"},
    ])


  return (
   <>
     <ChatInput commentlist={commentlist} setcommentList={setcommentList}/>
     <CommentList commentlist={commentlist}/>
  </>
  );
  
}

export default App
