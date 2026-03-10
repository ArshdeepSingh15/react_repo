import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

export const FetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
          headers: { Accept: "application/json" }
        });
        if (!res.ok) throw new Error("Failed to fetch users");

        const data = await res.json();
        setUsers(data);
      } catch (err: unknown) {
        setError((err as Error).message);
      }
    };
    fetchUsers();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Users (via Fetch API)</h2>
      {users.map((u) => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );
};
