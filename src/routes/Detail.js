import React from "react";
import { connect } from "react-redux";

function Detail({ toDo }) {
  // const id = useParams();
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at : {toDo?.id}</h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps; // id = ownProps.match.params.id
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) }; // 이 state는 store에 있는 state이다.
}

export default connect(mapStateToProps, null)(Detail);
