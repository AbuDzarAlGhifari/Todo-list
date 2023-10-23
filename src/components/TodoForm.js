import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
          addTodo(value);
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        className="todo-input" 
        placeholder='Apa tugas hari ini?' 
    />
    <button type="submit" className='todo-btn'>Add</button>
  </form>
  )
}
