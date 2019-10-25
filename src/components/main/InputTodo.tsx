import React, { useState, FormEvent } from 'react'

interface Props {
    handleInputTodo: (contents: string) => void
}

function InputTodo(props: Props) {

    const [todo, setTodo] = useState("")

    const handleOnsubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.handleInputTodo(todo)
        setTodo("")
    }

    return (
        <form onSubmit={handleOnsubmit}>
            <input value={todo}
                onChange={(event) => setTodo(event.target.value)} />
            {console.log(todo)}
        </form>
    )
}

export default InputTodo
