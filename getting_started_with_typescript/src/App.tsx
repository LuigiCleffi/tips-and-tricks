import { Card } from "./components/Card"
import { NavBar } from "./components/Navbar"
import { studentClasses } from "./utils/mock/classes"

function App() {
  return (
    <>
      <NavBar />
      <main className="p-4">
        <div className="grid grid-cols-4 gap-4">
          {studentClasses.map((subject, index) => (
            <Card subject={subject} key={`${subject.code}-${index}`} />
          ))}
        </div>
      </main>
    </>
  )
}

export default App
