import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'


const App = () => {
  const users = [
    {
      img: 'https://media.istockphoto.com/id/2209194723/photo/woman-at-a-cafe-working-on-a-laptop-computer.jpg?s=612x612&w=0&k=20&c=f4mm23QwzreejtfCrP9-OW7UXKefHsiYZm6tDPRzlpI=',
      intro: 'Lorem ipsum dolor sit amet.',
      tag: 'Satiesfied'
    },
    {
      img: 'https://media.istockphoto.com/id/2136087058/photo/productive-hub-young-people-working.jpg?s=612x612&w=0&k=20&c=4rWHGklaJ6KImq1a7eq8HPtS9XQqiCUYQ9_rqHI3tEo=',
      intro: 'Lorem ipsum dolor sit amet.',
      tag: 'UnderServed'
    }, 
    {
      img: 'https://media.istockphoto.com/id/1471749483/photo/hybrid-working.jpg?s=612x612&w=0&k=20&c=zkgi3_TsdOqzdWCndEq5MX2yrXlUE9RZ_p-L349wor0=',
      intro: 'Lorem ipsum dolor sit amet.',
      tag: 'UnderBanked'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App
