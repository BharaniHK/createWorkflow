import React from 'react';

function App() {
  const headStyle = {
    textAlign: "center",
  }
  return(
    <div>
      <p name="first_name">First</p>
      <p id="first_id">First</p>
      <form>
        <input name="username" id="id1" value="abc"></input>
        <button name="Submit">Submit</button>
      </form>
    </div>  
  )
}
