export default function Form({ list, setList }) {

  // Add input value as a new item to the todo list
  function addItem(e) {
    e.preventDefault();
    if (e.target.children[0].value !== '') {
    const newTodo = {
      task: e.target.children[0].value,
      done: false
    };
    setList([...list, newTodo]);
    e.target.reset();
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={(e) => addItem(e)}>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus />
      </form>
    </header>
  )
}