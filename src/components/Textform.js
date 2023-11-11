
import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log( text)
       let newText=text.toUpperCase()
        setText(newText)
        props.showPopup("Converted to Uppercase!", "success")
    }

    const handleLoClick = ()=>{
      // console.log( text)
     let newText=text.toLowerCase()
      setText(newText)
      props.showPopup("Converted to Lowercase!", "success")
  }

  const copyMe= ()=>{
    // console.log( text)
    let text = document.getElementById('myBox')

    text.select()
   navigator.clipboard.writeText(text.value)
   props.showPopup("Copied!", "success")

    
}

    const handleOnChange = (e)=>{
        // console.log("Handle Onchange")
        setText(e.target.value)
    }
    const[text, setText] = useState('');

    const handleClearClick = ()=>{
      // console.log( text)
     let newText= " ";
      setText(newText)
      props.showPopup("Cleared!", "success")
  }

  const HandleExtraSpaces = ()=>{
    // console.log( text)
   let newText= text.split(/[ ]+/);
   setText(newText.join(" "))
   props.showPopup("Removed Extra Spaces!", "success")
    
}

  return (
    <>
    <div style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className=" mb-3">
   
    <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white' , color : props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8" ></textarea>
  </div>

  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-primary mx-2 " onClick={copyMe}>Copy Text</button>
  <button className="btn btn-primary mx-2" onClick={HandleExtraSpaces}>Remove Spaces</button>

  </div>

  <div className="container my-5 "   style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
    <h2>Your text summary</h2>
    <p>Total words {text.split(" ").length} , Total Characters {text.length}</p>
    <p>{0.008 *text.split(" ").length } Minutes Read</p>

    <h2>Preview</h2>
    <p>{text.length > 0 ? text: "Enter something above to preview it here."}</p>
  </div>
  </>

  )
}
