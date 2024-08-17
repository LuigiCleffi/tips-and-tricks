import HelloWorld from "./components/HelloWorld"
import UserAge from "./components/UserAge"

function App() {
  return (
    <>
      <HelloWorld />
      <UserAge age={32}/>
    </>
)
}

export default App
