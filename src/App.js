import { useState } from 'react';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

const initialState = [
  {
    id: 1,
    task: 'Task 1',
    time: '5',
    done: false,
  },
  {
    id: 2,
    task: 'Task 2',
    time: '8',
    done: true,
  },
  {
    id: 3,
    task: 'Task 3',
    time: '3',
    done: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(initialState);
  const [dataToEdit, setDataToEdit] = useState(null);

  const handleDone = (id) => {
    const newData = tasks.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );

    setTasks(newData);
  };

  const handleDelete = (id) => {
    const newData = tasks.filter((task) => task.id !== id);
    setTasks(newData);
  };

  const handleAdd = (task) => {
    task.id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    setTasks([...tasks, task]);
  };

  const handleEdit = (taskEdit) => {
    const newData = tasks.map((task) =>
      task.id === taskEdit.id ? taskEdit : task
    );
    setTasks(newData);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <AddTask
          handleAdd={handleAdd}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          handleEdit={handleEdit}
        />
        <Tasks
          tasks={tasks}
          handleDone={handleDone}
          handleDelete={handleDelete}
          setDataToEdit={setDataToEdit}
        />
      </div>
    </div>
  );
}

export default App;
