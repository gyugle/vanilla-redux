import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../Store';

function Todo({ text, onBtnClick }) {
  return (
    <div>
      <li>
        {text} <button onClick={onBtnClick}>DEL</button>
      </li>
    </div>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(Todo);
