import React, { Fragment, useEffect, useState } from "react";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  //delete todo function

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:7777/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:7777/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center table-striped">
        <thead className="table-dark">
          <tr>
            <th>Details</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="table-info">
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.detail}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
