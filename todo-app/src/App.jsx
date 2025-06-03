import Button from "./components/Button"
import Header from "./components/Header"
import Title from "./components/Title";
import TodoItem from "./components/TodoItem"

import './style.css';

function App() {

  return (
    <>
      <Title />
      <div className="todo-container">
        <Header />
        <TodoItem item="Eat"/>
        <TodoItem item="Code"/>
        <TodoItem item="Sleep"/>
        <TodoItem item="Repeat"/>
        <TodoItem item="Eat More"/>
        <Button />
      </div>
    </>
  )
}

export default App
