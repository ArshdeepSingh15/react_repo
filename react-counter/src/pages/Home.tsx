import Greeting from "../components/Greetings";
import Counter from "../components/Counter";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <>
      <h1>Hello from React + TypeScript + Webpack ⚛️</h1>
      <p>Everything works perfectly!</p>

      <div className="card">
        <Greeting />
      </div>

      <Counter />
      <TodoList />
    </>
  );
};

export default Home;
