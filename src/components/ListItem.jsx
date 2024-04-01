import React from "react";
import { useDispatch } from "react-redux";
import { editTodo, remove } from "../feature/todo/todoSlice";

const ListItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    // console.log(handleDelete);

    dispatch(remove(id));
  };


  const handleEdit = (todo)=>{
    dispatch(editTodo(todo))
    // console.log(todo);
  }
  return (
    <>
      <li className="list-group-item rounded-0">
        <h1>{todo.text}</h1>

        <span className="float-end">
          <button className="btn btn-warning sm-btn rounded-0" onClick={()=>handleEdit(todo)}>Edit</button>
          <button
            className="btn btn-danger mx-2 sm-btn rounded-0 "
            onClick={() => handleDelete(todo.id)}
          >
            Delete
          </button>
        </span>
      </li>
    </>
  );
};

export default ListItem;
