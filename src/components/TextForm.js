import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("up clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLowClick = ()=>{
        // console.log("up clicked");
         let newText = text.toLowerCase();
         setText(newText);
         props.showAlert("Converted to LowerCase", "success");
     }

    const handleCopyClick = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!!", "success");
    }

    const handleClearClick = ()=>{
        setText("");
        props.showAlert("Text cleared!!", "success");
    }

    const handleRemoveSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }

    const handleOnChange = (event)=>{
       // console.log("on change clicked");
        setText(event.target.value);
    }

    

    const[text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}> 
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#114670':'white', color:props.mode==='light'?'black':'white'}} id= "myBox" rows="8"> </textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper Case</button>
    <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lower Case</button>
    <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={handleRemoveSpace}>Remove Extra Space</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3"  style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your Text Summary Here:</h2>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>

        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        
    </div> 
    </>

  )
}
 