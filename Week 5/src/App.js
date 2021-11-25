// Import modules and css
import React, { useState } from 'react';
import './App.css';

// Components
// Form component to add new todo
import Form from './components/Form';
// List component to display todo list
import List from './components/List';
// Filter component to filter todo list
import Filter from './components/Filter';
// Footer component 
import Footer from './components/Footer';

// Main App component
export default function App() {
  // States
  // Todo list items has a task and status (done or not)
  const [list, setList] = useState([{task: "do something", done: false, isEditing: false}, {task: "do something else", done: false, isEditing: false}]);
  // Filter state to show only done or not done tasks
  const [filter, setFilter] = useState(undefined);

  return (
    <>
      {/* Main Section */}
      <section className="todoapp">
        
        {/* Form Section */}
        <Form list={list} setList={setList} />

        {/* List Section */}
        <List list={list} filter={filter} setList={setList} />

        {/* Filter Section */}
        <Filter list={list} filter={filter} setList={setList} setFilter={setFilter} />

      </section>

      {/* Footer Section */}
      <Footer />
    </>
  );
}
