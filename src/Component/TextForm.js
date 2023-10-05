import React,{useState} from 'react'

export default function TextForm(props) {
  const handleDownClick=()=>{
    console.log("lowercase was clicked  ");
    let nutext=text.toLowerCase();
    setText(nutext);
    props.showAlert("converted to lowercase","sucess");

   }
  const handleUpClick=()=>{ console.log("Uppercase was clicked " + text);
  let newText=text.toUpperCase();
setText(newText);
props.showAlert("converted to uppercase","sucess");
}
  const handleOnChange=(event)=>{ console.log("On change")
setText(event.target.value);}
  const [text,setText]=useState('');
  const handleClearclick=()=>{
    let new1text=" ";
    setText(new1text);
    
  }
  const handlereverseclick=()=>{
    let revstr="";
    for(let i=text.length - 1; i>=0; i--)
    {
      revstr+=text[i];
    }
    setText(revstr);
    props.showAlert("string is reversed","sucess");
  }

  const handleCopy=()=>{
    
     navigator.clipboard.writeText(text);
     
    props.showAlert("text is copied","sucess");
  }
  
  const handleextraspace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("extra spaces removed","sucess");
  }
  
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    
   <h1 className='mb-4'>{props.heading} </h1>   
<div className="mb-3" >
  
  <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}>{text}</textarea>
</div>
<button  disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>{props.btn1}</button>
<button  disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>{props.btn}</button>
<button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleClearclick}>{props.btn2}</button>
<button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlereverseclick}>{props.btn3}</button>
<button  disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleCopy}>Copy text</button>
<button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleextraspace}>remove extra space</button>


    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes taken by user to read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
} 

