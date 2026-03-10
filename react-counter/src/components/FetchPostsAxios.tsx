import { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  id: number;
  title: string;
}

export const FetchPostsAxios = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        headers: { "Content-Type": "application/json" }
      })
      .then((res) => setPosts(res.data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Posts (via Axios)</h2>
      {posts.slice(0, 10).map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
};
