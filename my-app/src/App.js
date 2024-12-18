import React,{useEffect, useState} from "react"
import './App.css';

const  App=()=>{
  const [data, setAdd]=useState([])
  const [page, setPageNumber]=useState(0)
  let fetchData=async()=>{
    try {
      let data=await fetch('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json');
      let res=await data.json();
      setAdd(res)
    }catch(error){
      console.log(error)
    }
  }
  console.log("ooooooooooooooo", data)
  useEffect(()=>{
  fetchData()
},[])

  let numberPages=Math.ceil(data.length/10);
  let pageNumbers=[...Array(numberPages).keys()];
  console.log("pageNumber", pageNumbers)
  return (
    <div className="App">
     <table border="1">
      <tr>
        <th>Name</th>
        <th>Language</th>
        <th>Id</th>
      </tr>
     
      {data.slice(page*10, page*10+10).map((ele, index)=>(
          <tr>
            <td>{ele.name}</td>
            <td>{ele.language}</td>
            <td>{ele.id}</td>
          </tr>
      ))}
     </table>
     <div>
      {pageNumbers.map((ele, index)=>(
        <button onClick={()=>setPageNumber(index)}>{ele+1}</button>
      ))}
     </div>
    </div>
  );
}

export default App;
