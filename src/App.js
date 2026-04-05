import React from "react";
import ReactDOM from 'react-dom/client';
import "./App.css";
import { useState } from "react";

function Counter(){

  var [count, setCount] = useState(0);
  var [alert, setAlert] = useState("");

  // increment function
  const increment = ()=>{
        setCount (count+1)
        setAlert("")
    }
  
    // decrement function

    const decrement = ()=>{
      if (count > 0){
        setCount(count-1)
        setAlert("")
      }
      else{
            setAlert("Minimum Limit Reached!")
      }
    }

    // reset funtion

    const reset = ()=>{
      setCount(0)
      setAlert("")
    }

    return(
     <div className="container">
  <h1 className="title">Counter</h1>
  <h1 className="count">{count}</h1>

  <div className="buttons">
    <button className="btn increment" onClick={increment}>
      Increment
    </button>

    <button className="btn decrement" onClick={decrement}>
      Decrement
    </button>

    <button className="btn reset" onClick={reset}>
      Reset
    </button>
  </div>

  <p className="alert">{alert}</p>

</div>
    )
}
export default Counter;