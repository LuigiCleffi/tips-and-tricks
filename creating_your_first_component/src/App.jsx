import ChildrenComponent from "./components/ChildrenComponent"
import Counter from "./components/DeclarativeRendering"
import HelloWorld from "./components/HelloWorld"
import InputField from "./components/SpreadComponent"
import UserAge from "./components/UserAge"

function App() {
  return (
    <>
      <HelloWorld />
      <UserAge age={32} />
      <UserAge age={57} name="luigi"/>
      <Counter />
      <ChildrenComponent>
        <p>This is a child component!</p>
      </ChildrenComponent>
      <InputField type="text" placeholder="Enter your name" className="input" />
    </>
)
}

export default App
