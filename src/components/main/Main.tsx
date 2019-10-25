import React, { useState } from 'react'
import ItemTodo from './ItemTodo'
import InputTodo from './InputTodo'

const init = [{
  contents: "hello",
  isCheck: false
},
{
  contents: "world",
  isCheck: false
}]

export interface TodoInterface {
  contents: string
  isCheck: boolean
}

const Main: React.FC = () => {

  const [todo, setTodo] = useState(init)

  const handleInputTodo = (contents: string) => {
    setTodo([{ contents: contents, isCheck: false }].concat(todo))
  }

  const handleClick = (index: number) => {
    const newTodo = todo.slice()

    newTodo.splice(index, 1, {
      ...newTodo[index],
      isCheck: !newTodo[index].isCheck
    })
    setTodo(newTodo)

  }


  return (
    <div>
      <h1>Todo List</h1>
      <p><InputTodo handleInputTodo={handleInputTodo} /></p>
      {todo.map((todo, index) =>
        <ItemTodo
          todo={todo}
          index={index}
          handleClick={handleClick}
          key={index} />)}
    </div>
  );
}

export default Main
