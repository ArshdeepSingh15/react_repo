import { useState } from "react";

export default function TogglePanel({ title = "Default Panel", children }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div data-testid="toggle-panel">
      <h2>{title}</h2>
      <button onClick={() => setOpen(!open)}>
        {open ? "Hide" : "Show"}
      </button>

      {open && <div>{children}</div>}
    </div>
  );
}
