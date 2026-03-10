import { useState } from "react";

export default function SearchBox({ onSearch = (query?: string) => {} }) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div>
      <input
        placeholder="Search…"
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          marginTop: "40px",
          border: "2px solid",
          borderColor: focused ? "blue" : "grey",
        }}
      />
      <button onClick={() => onSearch(query)}>Search</button>
    </div>
  );
}
