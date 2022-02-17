import classNames from 'classnames';
import PropTypes from 'prop-types';
import './toDoList.scss';

const ToDoList = ({ toDoList, doneToDo, removeDoTo }) => {
  return toDoList.map(({ id, done, value }) => {
    return (
      <div className={`row toDoItem showToDoItem`} key={id}>
        <div className="col s1 center">
          <a
            className={classNames('btn-floating waves-effect waves-light z-depth-1', {
              green: done,
            })}
            onClick={() => doneToDo({ id, done: !done, value })}
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
          {value}
        </div>
        <div className="col s1 center">
          <a
            className="btn-floating waves-effect waves-light red z-depth-1"
            onClick={() => removeDoTo({ id, done, value })}
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
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  doneToDo: PropTypes.func.isRequired,
  removeDoTo: PropTypes.func.isRequired,
};

export default ToDoList;
