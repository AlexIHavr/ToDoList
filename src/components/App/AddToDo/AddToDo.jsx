import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const AddToDo = ({ createToDo }) => {
  const [toDoValue, setToDoValue] = useState('');

  const createNewToDo = useCallback(() => {
    if (toDoValue.trim()) {
      createToDo({
        id: v4(),
        done: false,
        title: toDoValue,
        removed: false,
      });
      setToDoValue('');
    }
  }, [toDoValue]);

  const changeToDoValue = useCallback(
    (e) => {
      setToDoValue(e.target.value);
    },
    [setToDoValue]
  );

  return (
    <div className="row">
      <div className="col s1 center">
        <a
          className="btn-floating waves-effect waves-light green z-depth-1"
          onClick={createNewToDo}
        >
          <i className="material-icons">add</i>
        </a>
      </div>
      <div className="col input-field s11">
        <textarea
          className="materialize-textarea"
          onChange={changeToDoValue}
          placeholder="Add ToDo"
          value={toDoValue}
        ></textarea>
      </div>
    </div>
  );
};

AddToDo.propTypes = {
  createToDo: PropTypes.func.isRequired,
};

export default React.memo(AddToDo);
