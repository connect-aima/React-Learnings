//advance State Management
import { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  function incNum() {
    setnum(num + 1)
  }
  function decNum() {
    setnum(num - 1)
  }

  const [obj, setObj] = useState({ user: "Aima", age: 20 })
  const btn1Clicked = () => {
    const newObj = { ...obj }
    newObj.user = "Syeda Aima Abbas"
    newObj.age = 21
    setObj(newObj)
  }
  const [arr, setArr] = useState([10, 20, 30])
  const btn2Clicked = () => {
    const newArr = [...arr]
    newArr.push(99)
    setArr(newArr)
  }
  return (
    <div>
      {/* Counter using normal useState */}
      <h1 className='bg-amber-200 m-5 p-5 text-black'>{num}</h1>
      <button onClick={incNum} className='bg-amber-200 m-5 p-5 text-black'>Increase</button>
      <button onClick={decNum} className='bg-amber-200 m-5 p-5 text-black'>Decrease</button>
      {/* working with object */}
      <h1 className='bg-amber-200 m-5 p-5 text-black'>
        Name: {obj.user}, Age: {obj.age}
      </h1>
      <button onClick={btn1Clicked} className='bg-amber-200 m-5 p-5 text-black'>Change user</button>
      {/* woring with array */}
      <h1 className='bg-amber-200 m-5 p-5 text-black'>
        Array: {arr}
      </h1>
      <button onClick={btn2Clicked} className='bg-amber-200 m-5 p-5 text-black'>Update Array</button>
    </div>
  )
}

export default App