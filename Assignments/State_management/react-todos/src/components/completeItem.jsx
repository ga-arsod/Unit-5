export const CompletedToDo = ({todo, getData}) => {
    // getData();

    return (
        <div className="TodoList">
            <div className="CompletedTodo">
                <input className="check" checked type="checkbox" />
                <p className="completed">{todo.title}</p>
            </div>
        </div>
    )
}