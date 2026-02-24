import {useState, useEffect} from 'react'
import axios from "axios"
import "./App.css"

function App(){
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/todos").then(res => { setTodos(res.data) })
  }, []);

  const addTask = () => {
    const trimmed = task.trim();
    if (!trimmed) return;
    axios.post("http://localhost:3000/todos", { task }).then(res => {
      setTodos([...todos, res.data]);
      setTask("");
    })
  };

  const deleteTask = (id) =>{
    axios.delete(`http://localhost:3000/todos/${id}`).then(() =>{
      setTodos(todos.filter(task => task._id !== id))
    } );
  };
  
  const toggleTask = (id) => {
    setTodos(todos.map(task => task._id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <div className = "app-container">
      <h1 className = "title">Todo List <span className = "author">created by Naveen</span></h1>
      <div className = "input-container">
      <label htmlFor="new-task"   className = "label">New task</label>
      <input
        id="new-task"
        className = "input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') addTask() }}
        placeholder="What needs to be done?"
        aria-label="Add new task"
        maxLength={100}
        autoFocus
        style={{padding: "8px", minWidth: 240}}
      />
      <button onClick={addTask}  className = "add-button">Add</button>
      </div>
      <span className = "char-count">{task.length}/100</span>

      <ul className = "todo-list">
        {todos.map(t => (
          <li key={t._id} className = {`todo-item ${t.completed ? 'completed' : ''}`}>
            <button onClick={() => toggleTask(t._id)} className = "toggle-button">{t.completed ? "✅" : "⬜"}</button>
            <p className = {`task-text ${t.completed ? 'completed' : ''}`}>{t.task}</p>
            <button onClick={() => deleteTask(t._id)} className = "delete-button">❌</button>
          </li>
        ))}
      </ul> 
    </div>
  )
}

export default App