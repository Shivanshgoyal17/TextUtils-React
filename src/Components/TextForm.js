import React, {useState} from 'react'

export default function TextForm(props) {

  const [text, setText] = useState("");
// text = "new text"           // Wrong way of changing the state
// setText("new text");        // Correct way of changing the state

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase", "success")
  }

  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase", "success")
  }
  
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared", "success")
  }

  const handleOnChange = (event)=>{
    setText(event.target.value)                     // Without using this we cannot add more text in the box
  }

  const handleCopy = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard", "success")
  }

  const handleExtraSpaces = ()=>{
    let newText2 = text.split(/[ ]+/);
    setText(newText2.join(" "))
    props.showAlert("Extra Spaces removed", "success")
  }


  return (
    <>
        <div className="container" style={{color : props.mode === 'dark' ? 'white' : '#040619'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#040619' : 'white', color: props.mode === 'dark' ? 'white' : '#040619'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>

        <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : '#040619'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
        </div>

    </>

  )
}


// Hooks - Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

// State - It is different fro props. Props hum pass karte hain aur wo render ho jati hai but state ek component ko belong karti hai, basically state bana ke hum kisi component ko reuse kar sakte hain uski value ko update kar kar ke. And state ko normal variable ki tarah update ni kar sakte. We have different syntax.

// State is used within the commponent function.
// Basic syntax of state is const [count, setCount] = useState(0); --> variable name, name of variable for updating the value, Default value... Ab count ko jha jha update karege sab jagah update ho jayega

// Event ko handle karne ke liye onChange karke attribute add kardo aur uske liye arrow function bana do

// When we use OnChange in textarea then we get event object also, thats why we kept event in brackets
// textarea me jo text hai wo state ka part hai aur wo text setText se update ho rha hai par hum usme user se input bhi lenge isliye usko target karke text me add karna padega.
