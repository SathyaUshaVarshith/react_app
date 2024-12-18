import React,{useState} from "react"
import './App.css';

const  App=()=>{
  const [ele, setAddEle]=useState('')
  return (
    <div className="App">
      {ele}
      <button onClick={()=>setAddEle("hell0")}>Add</button>
    </div>
  );
}

export default App;
