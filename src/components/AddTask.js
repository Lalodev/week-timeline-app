import { useEffect, useState } from 'react';

const initialForm = {
  id: null,
  task: '',
  time: '',
  done: false,
};

const AddTask = ({ handleAdd, dataToEdit, setDataToEdit, handleEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    //console.log(e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form) return;

    if (form.id === null) {
      handleAdd(form);
    } else {
      handleEdit(form);
    }

    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div className="col-lg-6 col-12">
      <div className="alert alert-primary text-center" role="alert">
        {dataToEdit ? <h5>Edit Task</h5> : <h5>Add Task</h5>}
      </div>
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Task
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="task"
            name="task"
            value={form.task}
            aria-describedby="task"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">
            Time
          </label>
          <input
            onChange={handleChange}
            type="number"
            className="form-control"
            id="time"
            name="time"
            value={form.time}
            aria-describedby="time"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {dataToEdit ? 'Edit Task' : 'Add Task'}
        </button>
      </form>
    </div>
  );
};

export default AddTask;
