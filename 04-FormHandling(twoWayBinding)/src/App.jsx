import React, { useState } from 'react'
//form handling and two way binding
const App = () => {
  const [title, setTitle] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form submitted by ", title)
    setTitle('')
  }
  return (
    <div>
      <form
       onSubmit={submitHandler}
      >
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          className='bg-green-300 m-2 p-3 text-black'
          type="text"
          placeholder='Enter...'
        />
        <button className='bg-green-300 m-2 p-3 text-black'>Submit</button>
      </form>
    </div>
  )
}

export default App
