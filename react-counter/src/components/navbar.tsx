import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ gap: 20, display: "flex", marginBottom: 20 }}>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/todos">Todos</NavLink>
      <NavLink to="/counter">Counter</NavLink>
      <NavLink to="/fetch-users">Users</NavLink>
      <NavLink to="/axios-posts">Posts</NavLink>
    </nav>
  );
};

export default Navbar;
//<NavLink to="/users">Users</NavLink>
//<NavLink to="/posts">Posts</NavLink>