import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const AddToDo = ({ createDoTo }) => {
  const [toDoValue, setToDoValue] = useState('');

  const createNewToDo = () => {
    if (toDoValue.trim()) {
      createDoTo({
        id: v4(),
        done: false,
        value: toDoValue,
      });
      setToDoValue('');
    }
  };

  return (
    <div className="row">
      <div className="col s1 center">
        <a
          className="btn-floating waves-effect waves-light green z-depth-1"
          onClick={() => createNewToDo()}
        >
          <i className="material-icons">add</i>
        </a>
      </div>
      <div className="col input-field s11">
        <textarea
          className="materialize-textarea"
          onChange={(e) => setToDoValue(e.target.value)}
          placeholder="Add ToDo"
          value={toDoValue}
        ></textarea>
      </div>
    </div>
  );
};

AddToDo.propTypes = {
  createDoTo: PropTypes.func.isRequired,
};

export default AddToDo;
