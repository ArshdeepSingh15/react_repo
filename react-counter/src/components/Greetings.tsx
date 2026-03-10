import React, { useEffect, useLayoutEffect, useRef, useContext } from "react";
import { AppContext } from "../Providers/AppContext";

const Greeting: React.FC = () => {
  const { user, setUser } = useContext(AppContext); // ⭐ GLOBAL CONTEXT
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto focus
  useLayoutEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Load saved name from localStorage
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) setUser(savedName);
  }, []);

  // Save whenever user changes
  useEffect(() => {
    if (user.trim().length > 0) {
      localStorage.setItem("name", user);
    }
  }, [user]);

  return (
    <div>
      <h2>Welcome!</h2>

      <input
        ref={inputRef}
        placeholder="Enter your name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      {user && <p>Hello, {user} 👋</p>}
    </div>
  );
};

export default Greeting;
