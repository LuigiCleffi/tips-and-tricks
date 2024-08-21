import ChildrenComponent from "./components/ChildrenComponent"
import Counter from "./components/DeclarativeRendering"
import HelloWorld from "./components/HelloWorld"
import {Button} from "./components/SpreadComponent"
import UserAge from "./components/UserAge"

const buttonProps = {
  label: "Click me",
   onClick: () => alert("Button clicked!"),
    disabled: false, 
    color: "blue"
}

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
      <Button {...buttonProps} />
    </>
)
}

export default App
