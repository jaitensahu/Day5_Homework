import "./ParaInput.css";
import {useState} from 'react'



const Input = (props) => {
const [inputVal, setInputVal]=useState(0);
function inputValUpdate(e){
    if(e.target.value>=0){
        setInputVal(Number(e.target.value))
    }
}

function getInput(){
    props.getInputValue(inputVal)
}

  return (
    <div className="container">
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <div className="inputField">
        <div>
        <span>Paragraphs:</span>  
        <input type="number" value={inputVal} onChange={inputValUpdate}/>
        </div>
        <button onClick={getInput}>Generate</button>
      
      </div>
    </div>
  );
};

export default Input;
