import { connect } from 'react-redux';

import './app.scss';

import {
  createDoTo,
  doneToDo,
  loadToDos,
  removeDoTo,
} from '../../redux/reducers/toDoListReducer/actions';
import AddToDo from './AddToDo/AddToDo';
import ToDoList from './ToDoList/ToDoList';
import LoadToDos from './LoadToDos/LoadToDos';

const App = ({ toDoList, createDoTo, doneToDo, removeDoTo, loadToDos }) => {
  return (
    <div>
      <h2 className="card-panel center teal accent-2 cyan-text text-darken-4">ToDo list</h2>
      <div className="container">
        <ToDoList toDoList={toDoList} doneToDo={doneToDo} removeDoTo={removeDoTo} />
        <AddToDo createDoTo={createDoTo} />
        <LoadToDos loadToDos={loadToDos} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ toDoList }) => ({
  toDoList: toDoList.toDoList,
});
const mapDispatchToProps = { createDoTo, removeDoTo, doneToDo, loadToDos };

export default connect(mapStateToProps, mapDispatchToProps)(App);
