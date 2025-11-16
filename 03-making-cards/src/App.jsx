import React from 'react'
import './index.css'
import Card from './Components/Card'


const App = () => {
 const jobListings = [
  {
    brandLogo: "https://example.com/logos/google.png",
    brandName: "Google",
    day: "2 days ago",
    typeOfEngineer: "Frontend Engineer",
    time: "Full Time",
    level: "Senior",
    salaryPerHour: 85,
    placeOfWork: "Bangalore"
  },
  {
    brandLogo: "https://example.com/logos/microsoft.png",
    brandName: "Microsoft",
    day: "1 day ago",
    typeOfEngineer: "Backend Engineer",
    time: "Part Time",
    level: "Junior",
    salaryPerHour: 45,
    placeOfWork: "Hyderabad"
  },
  {
    brandLogo: "https://example.com/logos/amazon.png",
    brandName: "Amazon",
    day: "5 days ago",
    typeOfEngineer: "Full Stack Engineer",
    time: "Full Time",
    level: "Mid-Level",
    salaryPerHour: 70,
    placeOfWork: "Delhi"
  },
  {
    brandLogo: "https://example.com/logos/meta.png",
    brandName: "Meta",
    day: "3 days ago",
    typeOfEngineer: "Mobile Engineer",
    time: "Full Time",
    level: "Senior",
    salaryPerHour: 90,
    placeOfWork: "Remote"
  },
  {
    brandLogo: "https://example.com/logos/netflix.png",
    brandName: "Netflix",
    day: "4 days ago",
    typeOfEngineer: "Data Engineer",
    time: "Full Time",
    level: "Mid-Level",
    salaryPerHour: 75,
    placeOfWork: "Mumbai"
  },
  {
    brandLogo: "https://example.com/logos/adobe.png",
    brandName: "Adobe",
    day: "6 days ago",
    typeOfEngineer: "DevOps Engineer",
    time: "Full Time",
    level: "Senior",
    salaryPerHour: 82,
    placeOfWork: "Noida"
  },
  {
    brandLogo: "https://example.com/logos/ibm.png",
    brandName: "IBM",
    day: "1 week ago",
    typeOfEngineer: "Cloud Engineer",
    time: "Part Time",
    level: "Mid-Level",
    salaryPerHour: 60,
    placeOfWork: "Pune"
  },
  {
    brandLogo: "https://example.com/logos/zoho.png",
    brandName: "Zoho",
    day: "2 days ago",
    typeOfEngineer: "Software Engineer",
    time: "Full Time",
    level: "Junior",
    salaryPerHour: 40,
    placeOfWork: "Chennai"
  },
  {
    brandLogo: "https://example.com/logos/flipkart.png",
    brandName: "Flipkart",
    day: "3 days ago",
    typeOfEngineer: "QA Engineer",
    time: "Part Time",
    level: "Junior",
    salaryPerHour: 35,
    placeOfWork: "Bangalore"
  },
  {
    brandLogo: "https://example.com/logos/accenture.png",
    brandName: "Accenture",
    day: "5 days ago",
    typeOfEngineer: "AI Engineer",
    time: "Full Time",
    level: "Senior",
    salaryPerHour: 95,
    placeOfWork: "Gurgaon"
  }
];

  return (
    <div className='main'>
      {jobListings.map(function(elem){
        return <Card brandLogo={elem.brandLogo} brandName={elem.brandName} day={elem.day} typeOfEngineer={elem.typeOfEngineer} time={elem.time} level={elem.level} salaryPerHour={elem.salaryPerHour} placeOfWork={elem.placeOfWork} />
      })}
    </div>

  )
}

export default App