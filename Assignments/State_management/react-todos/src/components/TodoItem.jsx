
export const TodoItem = ({todo}) => {
    return (
        <div className="TodoList">
            <div className="TodoLeft">
                <input type="checkbox" />
                <p>{todo.title}</p>
            </div>
        </div>
    )
}