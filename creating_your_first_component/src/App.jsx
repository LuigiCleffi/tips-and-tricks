import { Card } from "./components/Card"
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
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Passamos os valores para as propriedades `title`, `content`, e `footer` */}
      <Card 
        title="Título do Card"
        content="Este é o conteúdo do card. Ele pode conter texto, imagens, ou outros componentes."
        footer="Rodapé do card."
      />
    </div>
    </>
)
}

export default App
