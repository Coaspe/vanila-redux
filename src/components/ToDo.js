import React from "react";
import { connect } from "react-redux";
import { remove } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <span> </span>
      <button onClick={onBtnClick}> DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    // 함수 형태로 표기해야 한다.
    onBtnClick: () => dispatch(remove(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
