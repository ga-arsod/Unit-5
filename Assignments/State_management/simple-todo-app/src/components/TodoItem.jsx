export const TodoItem = ({todo, handleStatus}) => {
    return <div className="todos">
        <p>{todo.title}</p>
        <input className={todo.status ? "done" : "notdone"} type="radio" onClick={() => handleStatus(todo.id)} checked></input>
    </div>
}