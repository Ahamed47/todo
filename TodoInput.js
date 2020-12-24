import React, { Fragment, useState } from "react";

const TodoInput = () => {
  const [detail, setDetail] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { detail };
      const response = await fetch("http://localhost:7777/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(response);

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control box"
          placeholder="Detail"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default TodoInput;
