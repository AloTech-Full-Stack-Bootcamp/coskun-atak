export default function Filter( {list, setList, filter, setFilter }) {

    // Remove items with the 'done' property set to true
    function removeDone() {
        let newList = [...list];
        newList = newList.filter(newList => !newList.done);
        setList(newList);
    }

    return (
        <footer className="footer">

            <span className="todo-count">
                <strong>{list.filter(item => item.done === false).length}</strong>
                <span> </span>
                items left
            </span>

            <ul className="filters nav-tabs">
                <li>
                    <button onClick={(e) => {
                        setFilter(undefined)
                    }} className={filter === undefined ? "btn btn-sm selected" : "btn btn-sm"}>All</button>
                </li>
                <li>
                    <button onClick={(e) => {
                        setFilter(true)
                    }} className={filter === true ? "btn btn-sm selected" : "btn btn-sm"}>Active</button>
                </li>
                <li>
                    <button onClick={(e) => {
                        setFilter(false)
                    }} className={filter === false ? "btn btn-sm selected" : "btn btn-sm"}>Completed</button>
                </li>
            </ul>

            <button onClick={() => removeDone()} className="clear-completed">
                Clear completed
            </button>
        </footer>
    )
}