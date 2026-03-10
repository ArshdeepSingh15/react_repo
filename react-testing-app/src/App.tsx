import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import Counter from "./Counter";
import Search from "./Search";
import TogglePanel from "./TogglePanel";
import SearchBox from "./SearchBox";


export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/users">Users</Link> |
        <Link to="/counter">Counter</Link> |
        <Link to="/search">Search</Link> |
        <Link to="/toggle">TogglePanel</Link> |
        <Link to="/searchbox">SearchBox</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/search" element={<Search />} />
        <Route path="/toggle" element={<TogglePanel />} />
        <Route path="/searchbox" element={<SearchBox />} />
      </Routes>
    </BrowserRouter>
  );
}
 