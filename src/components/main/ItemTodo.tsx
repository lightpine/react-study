import React from 'react'

interface Props {
    contents: string
}

function ItemTodo(props: Props) {
    return (
        <div>
            {props.contents}
        </div>
    )
}

export default ItemTodo
