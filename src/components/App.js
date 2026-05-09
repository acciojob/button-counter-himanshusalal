
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const  [count, setcount]= useState(0)
  return (
    <div>
        {/* Do not remove the main div */}
       <h1>{count}</h1>
   <button onClick={() => setcount(count + 1)}>
      Increment
     </button>
    </div>
  )
}

export default App
