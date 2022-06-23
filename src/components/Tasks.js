import { useState } from 'react';
import Search from './Search';

const Tasks = ({ tasks, handleDone, handleDelete, setDataToEdit }) => {
  const [search, setSearch] = useState('');

  const taskFilter = tasks.filter((task) =>
    task.task.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="col-lg-6 col-12">
      <div className="alert alert-success text-center" role="alert">
        <h5>Tasks</h5>
      </div>
      <Search search={search} setSearch={setSearch} />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Task</th>
            <th scope="col">Hours</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {taskFilter.map((task) => (
            <tr key={task.id}>
              <th scope="row">{task.id}</th>
              {task.done ? (
                <td className="text-decoration-line-through">{task.task}</td>
              ) : (
                <td>{task.task}</td>
              )}
              <td className="text-center">{task.time}</td>
              <td className="text-center">
                {task.done ? (
                  <button
                    onClick={() => handleDone(task.id)}
                    className="btn btn-outline-dark me-1"
                  >
                    Done
                  </button>
                ) : (
                  <button
                    onClick={() => handleDone(task.id)}
                    className="btn btn-outline-warning me-1"
                  >
                    Pending
                  </button>
                )}
                <button
                  onClick={() => setDataToEdit(task)}
                  className="btn btn-outline-success me-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
