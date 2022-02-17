import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './toDoList.scss';

const ToDoList = ({ toDoList, doneToDo, removeToDo }) => {
  const [removedToDo, setRemovedToDo] = useState(null);

  return toDoList.map(({ id, done, title }) => {
    return (
      <div
        className={classNames('row toDoItem', {
          showToDoItem: id !== removedToDo,
          hideToDoItem: id === removedToDo,
        })}
        key={id}
        onAnimationEnd={() => {
          if (id === removedToDo) {
            removeToDo({ id });
          }
        }}
      >
        <div className="col s1 center">
          <a
            className={classNames('btn-floating waves-effect waves-light z-depth-1', {
              green: done,
            })}
            onClick={() => doneToDo({ id, done: !done })}
          >
            <i className="material-icons">{done ? 'done' : 'info_outline'}</i>
          </a>
        </div>
        <div
          className={classNames('col card-panel s10', {
            'green lineThroughText': done,
            'teal accent-1': !done,
          })}
        >
          {title}
        </div>
        <div className="col s1 center">
          <a
            className="btn-floating waves-effect waves-light red z-depth-1"
            onClick={() => setRemovedToDo(id)}
          >
            <i className="material-icons">remove</i>
          </a>
        </div>
      </div>
    );
  });
};

ToDoList.propTypes = {
  toDoList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      removed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  doneToDo: PropTypes.func.isRequired,
  removeToDo: PropTypes.func.isRequired,
  setRemovedToDo: PropTypes.func.isRequired,
};

export default ToDoList;
