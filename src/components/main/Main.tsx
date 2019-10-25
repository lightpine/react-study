import React, { useState } from 'react'
import ItemTodo from './ItemTodo'
import InputTodo from './InputTodo'
import { string } from 'prop-types'

const init = [{
  contents: "hello"
},
{
  contents: "world"
}]

export interface TodoInterface {
  contents: string
}

const Main: React.FC = () => {

  const [todo, setTodo] = useState(init)

  const handleInputTodo = (contents: string) => {
    setTodo([{ contents: contents }].concat(todo))
  }


  return (
    <div>
      <h1>Todo List</h1>
      <p><InputTodo handleInputTodo={handleInputTodo} /></p>
      {todo.map((todo) =>
        <ItemTodo contents={todo.contents} />)}
    </div>
  );
}

export default Main
