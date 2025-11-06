import React from 'react'
import Card from '../Components/Card'
const App = () => {
  const jobListings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg",
    companyName: "Google",
    datePosted: "2 days ago",
    position: "Software Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    hourlyRate: 95,
    location: "USA, Mountain View",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    position: "Backend Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    hourlyRate: 85,
    location: "USA, Redmond",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    companyName: "Meta",
    datePosted: "1 day ago",
    position: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    hourlyRate: 80,
    location: "USA, Menlo Park",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    datePosted: "3 days ago",
    position: "Cloud Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    hourlyRate: 100,
    location: "USA, Seattle",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "6 days ago",
    position: "iOS Developer",
    tag1: "Part-time",
    tag2: "Mid Level",
    hourlyRate: 75,
    location: "USA, Cupertino",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Netflix_icon.svg",
    companyName: "Netflix",
    datePosted: "4 days ago",
    position: "DevOps Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    hourlyRate: 90,
    location: "USA, Los Gatos",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/9/91/OpenAI_Logo.svg",
    companyName: "OpenAI",
    datePosted: "7 days ago",
    position: "AI Researcher",
    tag1: "Full-time",
    tag2: "Senior Level",
    hourlyRate: 120,
    location: "USA, San Francisco",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Tesla_Motors_logo.svg",
    companyName: "Tesla",
    datePosted: "2 days ago",
    position: "Software Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    hourlyRate: 88,
    location: "USA, Austin",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/02/IBM_logo.svg",
    companyName: "IBM",
    datePosted: "8 days ago",
    position: "Data Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    hourlyRate: 70,
    location: "USA, New York",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/d/db/Samsung_Logo.svg",
    companyName: "Samsung",
    datePosted: "3 days ago",
    position: "Embedded Systems Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    hourlyRate: 95,
    location: "Korea, Seoul",
  },
];

  return (
    <div className='parent'>
     {jobListings.map(function(e,id){
      return <div key={id}>
         <Card brandLogo={e.brandLogo} companyName={e.companyName} datePosted={e.datePosted} position={e.position} tag1={e.tag1} tag2={e.tag2} hourlyRate={e.hourlyRate} location={e.location}/>
      </div>
     })}
    </div>

  )
}

export default App
