
import React, {useState} from 'react'

export default function Form(props) {
    const onupper= ()=> {
        const newText=text.toUpperCase(text)
        
        setText(newText)
        props.showAlert("convert to uppercase","success")

    }  
    const onlower= ()=> {
        const newText=text.toLowerCase(text)
        setText(newText)
        props.showAlert("convert to Lowercase","success")

    }  

    const onHandler= (event)=> {
        setText(event.target.value)

    } 
    const [text, setText] = useState ('')
    return (
    <>
    <div className="container col-md-6" style ={{ color : props.mode ==='dark'?'white':'black'}}>
    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
    <div className='mb-3'>
    <textarea className="form-control"  value={text} id="exampleFormControlTextarea1" style={{backgroundColor: props.mode ==='dark'? '#9e9292': 'white', color:props.mode=== 'dark'?'white': 'black'}} onChange={onHandler} rows="3"></textarea>
    </div>
    <button type="button" className="btn btn-primary my-3" onClick={onupper}>Convert Upper Case</button>
    <button type="button" className="btn btn-primary my-3 mx-2" onClick={onlower}>Convert Lower Case</button>
    </div>

    <div className='container col-md-6' style ={{ color : props.mode ==='dark'?'white':'black'}}>
        <h3>Text Summery</h3>
        <p>{text.split(' ').length} Words and {text.length} Charactor</p>
        <h3>Text Preview</h3>
        <p>{text.length>0?text:"write somthing"}</p>        
        </div>  </>
  )
}
