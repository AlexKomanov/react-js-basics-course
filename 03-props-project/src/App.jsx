import Student from "./Student.jsx";


function App() {


  return (
    <>
        <h1>Props Lesson</h1>
        <Student name="Alexander" age={30} isStudent={true}/>
        <Student name="Ilay" age={5} isStudent={false}/>
    </>
  )
}

export default App
