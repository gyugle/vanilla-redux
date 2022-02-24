import React, { useState } from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo';
import { actionCreators } from '../Store';

function Home({ toDos, addToDo }) {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText('');
  };

  return (
    <div>
      <h3>Do something</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          placeholder="What to do something?"
          onChange={onChange}
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <Todo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
