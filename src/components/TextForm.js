import React, { useState } from 'react'

export default function TextForm(props) {
  const [text,setText]=useState("Enter Text here");

  const onUpperClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
  }

  const onLowerClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }
  
  const onClearClick=()=>{
      setText('');
  }
  

  const  handleOnChange=(event)=>
  {
    setText(event.target.value);
  }
  return (
   
    <div className="form-group">
    <h1>{props.heading}</h1>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="mytext" rows={8}/>
    <button className="btn btn primary" onClick={onUpperClick}>Convert to Uppercase</button> 
    <button className="btn btn primary" onClick={onLowerClick}>Convert to Lowercase</button> 
    <button className="btn btn primary" onClick={onClearClick}>Clear</button> 
    
    </div>
   
  )
}
