import React from "react";

interface PageProps {
  children: React.ReactNode;
  dark?: boolean;
}

export const Page: React.FC<PageProps> = ({ children, dark }) => {
  const background = dark ? "#111827" : "#f9fafb";
  const color = dark ? "#f9fafb" : "#111827";

  return (
    <div
      style={{
        minHeight: "100vh",
        background,
        color,
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        padding: "2rem",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
};
