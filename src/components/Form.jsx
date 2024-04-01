import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, update,  } from "../feature/todo/todoSlice";

const Form = () => {
  const [text, settext] = useState("");

  const { edit } = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit.isEdit) {
      dispatch(update({
        id : edit.todo.id,
        text : text,

      }))
    } else {
      dispatch(
        add({
          id: crypto.randomUUID(),
          text,
        })
      );
    }
    // console.log(text);
    settext("");
  };

  useEffect(() => {
    settext(edit.todo.text);
  }, [edit]);

  return (
    <>
      <form className=" p-5" onSubmit={handleSubmit}>
        <input
          placeholder="Enter text"
          type="text"
          className="form-control rounded-0"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />

        <button className="btn btn-success w-100 mt-2 rounded-0">
          Save Item
        </button>
      </form>
    </>
  );
};

export default Form;
