import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

const Todos = () => {
  return (
    <>
      <h2>Todos</h2>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default Todos;
