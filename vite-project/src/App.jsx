import Student from './Components/Student'
import './Components/Student.css'

function App() {
  const student = {
      pic: "https://avatars.githubusercontent.com/u/101374265?v=4",
      name: "Nandini Goel",
      age: "21",
      roll: "2300321530098",
      branch: "CSE-AIML",
      section: "B",
      college: "ABES Engineering College"
  }

  return (
    <>
      <div className='container'>
        <Student data={student}/>
        </div>
    </>
  )
}

export default App