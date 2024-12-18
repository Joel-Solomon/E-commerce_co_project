import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>E-commerce CoProject</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Here is a random button count is {count}
        </button>
      </div>
    </>
  )
}
export default App
