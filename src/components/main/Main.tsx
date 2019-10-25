import React, { useState } from 'react'
import ItemTodo from './ItemTodo'

const init = [{
  contents: "hello"
},
{
  contents: "world"
}]

interface TodoInterface {
  contents: string
}

const Main: React.FC = () => {

  const [todo, setTodo] = useState(init)

  return (
    <div>
      <h1>Todo List</h1>
      {todo.map((todo) =>
        <ItemTodo contents={todo.contents} />)}
    </div>
  );
}

export default Main
