import React, { useState } from 'react'

const ToDo = () => {

    const [todo, setToDo] = useState("")
    const [todos, setToDoS] = useState([])
    const [editId, setEditId] = useState(0)


    const handleSubmit = (e) => {
        e.preventDefault()

        if (editId) {
            const editToDo = todos.find((i) => i.id === editId)
            const updateEditTodos = todos.map((elem) => 
            elem.id === editToDo.id 
            ? (elem = { id: elem.id, todo }) 
            : (id: {elem.id}, todo: {t.todo})
            )
        }

        if (todo !== "") {
            setToDoS([{
                id: `${todo}`,
                todo
            },
            ...todos
            ])
        }
        setToDo(" ")
    }

    const handleDelete = (id) => {
        const deleteToDo = todos.filter((item) => item.id !== id)
        setToDoS([...deleteToDo])
    }

    const handleEdit = (id) => {

        const editToDo = todos.find((i) => i.id === id)
        setToDo(editToDo.todo)
        setEditId(id)
    }

    return (
        <div className='container'>
            <h1>
                ToDo App
            </h1>
            <form className='todo__form' onSubmit={handleSubmit}>
                <input type="text" value={todo} onChange={(e) => setToDo(e.target.value)} />
                <button>
                    {editId ? "Edit" : "Go"}
                </button>
            </form>

            <ul className='todo__list'>
                {
                    todos.map((t) => (
                        <li className='todo__li'>
                            <span className='todo__span' key={t.id}>{t.todo}</span>
                            <button onClick={() => handleEdit(t.id)}>Edit</button>
                            <button onClick={() => handleDelete(t.id)}>Delete</button>
                        </li>
                    ))
                }


            </ul>
        </div>
    )
}

export default ToDo