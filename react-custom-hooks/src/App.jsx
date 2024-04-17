import React from 'react'
import useQuery from './hooks/useQuery'
import axios from 'axios';

const App = () => {

  const { response } = useQuery(
    axios.get('http://localhost:5000/random')
  );

  console.log(response);

  return (
    <div>
      <h1>{response.randomNum}</h1>
    </div>
  )
}

export default App

// Example - 1
// import React from 'react'
// import useRandomColor from './hooks/useRandomColor'

// const App = () => {
//   const { color, changeColor } = useRandomColor();
//   console.log(color)
//   return (
//     <div style={{ width: '100vw', height: '100vh', backgroundColor: "#"+color }}>
//       <button onClick={changeColor}>Change Color</button>
//     </div>
//   )
// }

// export default App