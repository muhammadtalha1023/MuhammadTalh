import React from "react";
import { useState } from "react";
import { useEffect } from "react";
function ChildB() {
    const [count, setCount] = useState(0);
  

    useEffect(() => {
      document.title = `You clicked ${count} times`;
      console.log(count);
    });

    useEffect(() => {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 10000);
      });
    
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <form>
  <label>
    Name:
    <input type="text" name="name" placeholder="Talha" />
    <br></br>
    P-Age:
    <input type="number" name="Age" placeholder="Enter Your Age" />
  </label>
  <br></br>
  <input type="submit" value="Submit" />
  
</form>

      </div>
    );
  }
  export default ChildB;