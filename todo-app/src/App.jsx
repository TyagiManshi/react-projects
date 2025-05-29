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
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <Button />
      </div>
    </>
  )
}

export default App
