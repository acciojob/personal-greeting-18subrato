
import React, { useState } from "react";


const App = () => {
  const [name,setName] = useState('');
  return (
    <div>
        <p>Enter your name:</p>
        <input
          type="text"
          onChange={(e)=>setName(e.target.value)}
        />
        {name && <p>"Hello {name}!"</p>}
    </div>
  )
}

export default App
