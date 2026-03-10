import { useState } from "react";

export function useUser() {
  const [name, setName] = useState<string>("");

  const updateUser = (newName: string) => {
    setName(newName);
  };

  return {
    name,
    updateUser,
  };
}
