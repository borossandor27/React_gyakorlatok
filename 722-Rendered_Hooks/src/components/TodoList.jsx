import { useEffect, useState } from "react"

const LOCAL_STORAGE_KEY = "todos"

function TodoList() {
    console.log("TodoList Rendered")
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY)
        return storedTodos ? JSON.parse(storedTodos) : []
    })

    const [newTodoName, setNewTodoName] = useState("")
    function addTodo(e) {
        e.preventDefault()
        setTodos((prevTodos) => {
            return [...prevTodos, { id: crypto.randomUUID(), name: newTodoName, completed: false }]
        })
        setNewTodoName("")
    }

    function toggleTodo(id, completed) {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed }
                }
                return todo
            })
        })
    }
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    return (
        <div className="todo-list">
            <form onSubmit={addTodo} className="form">
                <label>New Task</label>
                <input
                    value={newTodoName}
                    onChange={(e) => setNewTodoName(e.target.value)}
                    type="text" />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo) => {
                    return (
                        <li key={todo.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                                /><span>{todo.name}</span>
                            </label>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList