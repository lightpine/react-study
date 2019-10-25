import React, { useState } from 'react'

function InputTodo() {

    const [todo, setTodo] = useState("")

    return (
        <div>
            <input value={todo}
                onChange={(event) => setTodo(event.target.value)} />
            {console.log(todo)}
        </div>
    )
}

export default InputTodo
