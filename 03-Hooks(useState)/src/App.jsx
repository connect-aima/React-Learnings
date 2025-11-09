import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  function incNum(){
    setnum(num+1)
  }
  function decNum(){
    setnum(num-1)
  }
  return (
    <div>
      <h1 className='bg-amber-200 m-5 p-5 text-black'>{num}</h1>
      <button onClick={incNum} className='bg-amber-200 m-5 p-5 text-black'>Increase</button>
      <button onClick={decNum} className='bg-amber-200 m-5 p-5 text-black'>Decrease</button>
    </div>
  )
}

export default App
