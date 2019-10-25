import React, { useState } from 'react'

const init = [{
  contents: "hello"
},
{
  contents: "world"
}]

const Main: React.FC = () => {

  const [todo, setTodo] = useState(init)
  return (
    <div>
      <h1>Todo List</h1>
      {todo.map((todo) => todo.contents)}
    </div>
  );
}

export default Main
