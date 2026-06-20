import { useState } from 'react'
import CounterApp from './Component/CounterApp'
/* Date: 19/06/2026 
   Written By: Nurullahi Adigun
*/
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <CounterApp/>
      </section>
    </>
  )
}

export default App
