import PropTypes from 'prop-types';
import React from 'react';

const LoadToDos = ({ loadToDos }) => {
  return (
    <div className="row">
      <div className="col s12 center">
        <a className="waves-effect waves-light btn" onClick={loadToDos}>
          <i className="material-icons left">cloud</i>load ToDos
        </a>
      </div>
    </div>
  );
};

LoadToDos.propTypes = {
  loadToDos: PropTypes.func.isRequired,
};

export default React.memo(LoadToDos);
