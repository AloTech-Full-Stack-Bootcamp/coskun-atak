import { nanoid } from "nanoid";

// List Component for listing todo items
export default function List({ list, setList, filter }){

  // Mark an item as done
  function checkItem(item) {
    const newList = [...list];
    const indexToCheck = newList.indexOf(item);
    newList[indexToCheck].done = !newList[indexToCheck].done;
    setList(newList);
  }

  // Remove an item from the todo list
  function removeItem(item) {
    const newList = [...list];
    const indexToDelete = newList.indexOf(item);
    newList.splice(indexToDelete, 1);
    setList(newList);
  }

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">
        Mark all as complete
      </label>

      <ul className="todo-list">

        {list
          .filter(item => item.done !== filter)
          .map((item, index) => {
            return (
              <li key={nanoid()} className={item.done && "completed"}>
                <div className="view">
                  <input onClick={() => checkItem(item)} className="toggle" type="checkbox" checked={item.done}/>
                  <label>{item.task}</label>
                  <button onClick={() => removeItem(item)} className="destroy"></button>
                </div>
              </li>
            )
          })
        }

      </ul>
    </section>
  )
}