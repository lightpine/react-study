import React from 'react'
import { TodoInterface } from './Main'

interface Props {
    todo: TodoInterface
    index: number
    handleClick: (index: number) => void
}

function ItemTodo(props: Props) {

    const { todo, index, handleClick } = props
    const { contents, isCheck } = todo

    return (
        <div onClick={() => handleClick(index)}>
            {isCheck ? "ok" : "no"}
            {contents}
        </div>
    )
}

export default ItemTodo
