import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useUser } from "../hooks/useUser";

const Greeting: React.FC = () => {
  const { userName, updateUserName } = useUser();
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * ⭐ useLayoutEffect — runs BEFORE the browser paints
   * This avoids flicker when focusing the input.
   */
  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // runs once on mount

  /**
   * ⭐ Runs ONLY once — simulate restoring saved name from localStorage
   */
  useEffect(() => {
    console.log("Greeting mounted");

    const savedName = localStorage.getItem("name");
    if (savedName) updateUserName(savedName);
  }, []);

  /**
   * ⭐ Runs whenever `userName` changes
   * Save the name to localStorage so it persists
   */
  useEffect(() => {
    if (userName.trim().length > 0 && userName !== "Guest") {
      localStorage.setItem("name", userName);
    }
  }, [userName]);

  return (
    <div>
      <h2>Welcome!</h2>

      <input
        ref={inputRef}
        placeholder="Enter your name"
        value={userName === "Guest" ? "" : userName}
        onChange={(e) => updateUserName(e.target.value || "Guest")}
      />

      {userName && userName !== "Guest" && <p>Hello, {userName} 👋</p>}
    </div>
  );
};

export default Greeting;
