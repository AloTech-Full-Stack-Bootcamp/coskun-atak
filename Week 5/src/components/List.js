import { useState } from 'react';
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

  function toggleEdit(e, item) {
    e.preventDefault();
    const newList = [...list];
    const indexToCheck = newList.indexOf(item);
    newList[indexToCheck].isEditing = !newList[indexToCheck].isEditing;
    setList(newList);
  }

  function editItem(e, item) {
    const newList = [...list];
    const indexToCheck = newList.indexOf(item);
    newList[indexToCheck].task = e.target.value;
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
          
          .map((item) => {
            if (!item.isEditing){
              return (
                <li key={nanoid()} className={item.done && "completed"}>
                  <div className="view">
                    <input onClick={() => checkItem(item)} className="toggle" type="checkbox" checked={item.done}/>
                    <label onClick={(e) => toggleEdit(e, item)}>{item.task}</label>
                    <button onClick={() => removeItem(item)} className="destroy"></button>
                  </div>
                </li>
              )
            } else if (item.isEditing) {
              return (
                <li key={nanoid()} className={item.done && "completed"}>
                  <div className="view">
                    <form onSubmit={(e) => toggleEdit(e, item)}>
                      <input autoFocus type="text" onChange={(e) => editItem(e, item)} value={item.task}/>
                    </form>
                  </div>
                </li>
              )
            }
          })
        }

      </ul>
    </section>
  )
}