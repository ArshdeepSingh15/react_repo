import { useEffect, useState } from "react";
import { api } from "../api/axiosInstance";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function AxiosPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState("");

  // 🔹 GET posts
  const fetchPosts = async () => {
    try {
      const res = await api.get<Post[]>("/posts");
      setPosts(res.data.slice(0, 5)); // show 5
    } catch (err: any) {
      setError(err.message);
    }
  };

  // 🔹 POST new post
  const createPost = async () => {
    try {
      const res = await api.post<Post>("/posts", {
        title: "New Axios Post",
        body: "This is created via Axios instance!",
      });
      alert("Created Post ID: " + res.data.id);
    } catch (err: any) {
      alert("Error creating post: " + err.message);
    }
  };

  // 🔹 PUT / Update
  const updatePost = async (id: number) => {
    try {
      const res = await api.put<Post>(`/posts/${id}`, {
        title: "Updated Title",
        body: "Updated Body"
      });
      alert("Updated Post: " + JSON.stringify(res.data));
    } catch (err: any) {
      alert("Update failed: " + err.message);
    }
  };

  // 🔹 DELETE
  const deletePost = async (id: number) => {
    try {
      await api.delete(`/posts/${id}`);
      alert("Deleted Post " + id);
    } catch (err: any) {
      alert("Delete failed: " + err.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Posts (via Axios Instance + Interceptors)</h2>

      <button onClick={createPost}>Create Post</button>

      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <b>{p.title}</b>
            <button onClick={() => updatePost(p.id)}>Update</button>
            <button onClick={() => deletePost(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
 