import { Card } from "./components/Card"
import { NavBar } from "./components/Navbar"

function App() {
  return (
    <>
      <NavBar />
      <main className="p-4">
        <Card subject={{
          code: "CIC1234",
          name: "Algoritmos e Programação",
          professor: "Prof. Fulano",
          schedule: "Segunda e Quarta, 19h às 21h"
        }} />
      </main>
    </>
  )
}

export default App
