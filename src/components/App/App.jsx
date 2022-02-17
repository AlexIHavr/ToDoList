import { connect } from 'react-redux';

import './app.scss';

import { createToDo, doneToDo, removeToDo, setRemovedToDo } from '../../redux/toDoList/actions';
import AddToDo from './addToDo/AddToDo';
import ToDoList from './toDoList/ToDoList';
import LoadToDos from './loadToDos/LoadToDos';
import { loadToDos } from '../../redux/toDoList/thunks';

const App = ({ toDoList, createToDo, doneToDo, removeToDo, loadToDos, setRemovedToDo }) => {
  return (
    <div>
      <h2 className="card-panel center teal accent-2 cyan-text text-darken-4">ToDo list</h2>
      <div className="container">
        <ToDoList
          toDoList={toDoList}
          doneToDo={doneToDo}
          removeToDo={removeToDo}
          setRemovedToDo={setRemovedToDo}
        />
        <AddToDo createToDo={createToDo} />
        <LoadToDos loadToDos={loadToDos} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ toDoList }) => ({
  toDoList: toDoList.toDoList,
});
const mapDispatchToProps = { createToDo, removeToDo, doneToDo, loadToDos, setRemovedToDo };

export default connect(mapStateToProps, mapDispatchToProps)(App);
