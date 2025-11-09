import React, { useEffect, useState } from 'react'
import axios from 'axios'
//we use api to receive data from backend there are two mthods using fetch and axios
const App = () => {
  //first method using fetch
  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //to get data in json format
    const data = await response.json()
    console.log(data)
  }
  //second method using axios we need to install axios first using npm i axios and import it above
  const data = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(data)
  }
  // another api key for pictures using axios
  const [picsData, setPicsData] = useState([])
  const getPics = async () => {
    const respose = await axios.get('https://picsum.photos/v2/list')
    setPicsData(respose.data)
  }
  //use of another famous hook  useEffect
  //we can execute multiple things side by side 
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(100)
  useEffect(() => {
    console.log("useEffect is running")
  }, [num1])// now it will run first time and everytime when num1 will change

  return (
    <div>
      {/* first button  */}
      <button
        className='m-5 p-3 bg-blue-300 text-black rounded-full'
        onClick={getData}
      >
        Get Data using fetch api
      </button>
      {/* second button  */}
      <button
        className='m-5 p-3 bg-blue-300 text-black rounded-full'
        onClick={data}
      >
        Get Data using axios
      </button>
      {/* 3rd button  */}
      <button
        className='m-5 p-3 bg-blue-300 text-black rounded-full'
        onClick={getPics}
      >
        Get Data of pics using axios
      </button>
      <div>
        {picsData.map((e, idx) => {
          return <h3>Aima {idx + 1}</h3>
        })}
      </div>

      <div className='bg-amber-200 m-2 p-5 w-1/2 text-black flex items-center flex-col rounded-full'>
      <p>Checking use of use Effect</p>
        <h1 className='bg-amber-50 text-black  m-2 p-5'>{num1}</h1>
        <h1 className='bg-amber-50 text-black m-2 p-5'>{num2}</h1>
        <button
          onMouseEnter={() => setNum1(num1 + 1)}
          onMouseLeave={() => setNum2(num2 + 100)}
          className='m-5 p-3 bg-blue-300 text-black rounded-full'
        >
          hover in to change num 1 hover out to change num2
        </button>
      </div>
    </div>
  )
}

export default App
