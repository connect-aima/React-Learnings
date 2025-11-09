import React from 'react'
//local storage is memory of browser
const App = () => {
  //to clear all
  localStorage.clear()
  //to set something
  localStorage.setItem('user', 'Aima')
  localStorage.setItem('age', '20')
  //to get something
  const user = localStorage.getItem('user')
  const age = localStorage.getItem('age')
  console.log(user)
  console.log(age)
  //to remove something
  localStorage.removeItem('user')
  //to set or retrieve obj
  const info={
    name:'Aima',
    reg:'10',
    city:'Rawalpindi'
  }
  localStorage.setItem('info',JSON.stringify(info))
  //to get data of obj as obj we use jason.parse other we receive it as string
  const infoo=JSON.parse(localStorage.getItem('info'))
  console.log(infoo)
  return (
    <div>
      Aima
    </div>
  )
}

export default App
