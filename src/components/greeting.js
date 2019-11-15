import React from "react";

function Greeting({ name }) {
  return (
    <div>
      <h1>COUNT YOUR SINS {name} !</h1>
    </div>
  );
}

// class Greeting extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name : !prompt("Please enter your name") ? return prompt 
//     }
//   }
// }

export default Greeting;
