import React from "react";
import { useState } from "react";
import { connect } from "react-redux"; // react component와 store을 연결시켜서 state의 값을 가져오거나 dispatch할 수 있게 해준다.
import { add } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
  // { toDos } => toDos = props.toDos
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

// Redux state를 component의 props로 전달한다.
function mapStateToProps(state) {
  return { toDos: state };
}
// Component의 props로 store.dispatch(액션생성함수 or 액션)를 전달한다.
function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(add(text)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
// mapStateToProps 이용해서 state를 가져올 것이다.
// connect()는 해당 component르 보내는 props에 추가될 수 있도록 허용해 준다.
// => return 값이 props로 추가된다.
