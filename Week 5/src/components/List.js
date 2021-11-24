import { nanoid } from "nanoid";

// List Component for listing todo items
export default function List({ list, setList, filter }){

  // Mark an item as done
  function checkItem(index) {
    const newList = [...list];
    newList[index].done = !newList[index].done;
    setList(newList);
  }

  // Remove an item from the todo list
  function removeItem(index) {
    const newList = [...list];
    newList.splice(index, 1);
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
                  <input onClick={() => checkItem(index)} className="toggle" type="checkbox" checked={item.done}/>
                  <label>{item.task}</label>
                  <button onClick={() => removeItem(index)} className="destroy"></button>
                </div>
              </li>
            )
          })
        }

      </ul>
    </section>
  )
}