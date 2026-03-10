import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Providers/AppContext";

const TodoDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { todos } = useContext(AppContext);

  const todo = todos.find((t) => String(t.id) === id);

  if (!todo) return <p>Todo not found</p>;

  return (
    <>
      <h2>Todo Details</h2>
      <p>Text: {todo.text}</p>
      <p>Status: {todo.completed ? "Completed" : "Pending"}</p>
      <button onClick={() => navigate("/todos")}>Back</button>
    </>
  );
};

export default TodoDetails;
