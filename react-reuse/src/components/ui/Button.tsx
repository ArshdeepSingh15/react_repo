import React from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

interface BaseButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

// Polymorphic type: by default "button", but can be "a" or any element
type AsProp<E extends React.ElementType> = {
  as?: E;
} & React.ComponentPropsWithoutRef<E>;

type ButtonProps<E extends React.ElementType = "button"> = BaseButtonProps &
  AsProp<E>;

const getButtonStyle = (variant: ButtonVariant = "primary"): React.CSSProperties => {
  const base: React.CSSProperties = {
    borderRadius: 999,
    padding: "0.45rem 1rem",
    fontSize: "0.95rem",
    cursor: "pointer",
    fontWeight: 500,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid transparent",
    textDecoration: "none",
  };

  switch (variant) {
    case "outline":
      return {
        ...base,
        background: "transparent",
        color: "#2563eb",
        borderColor: "#2563eb",
      };
    case "ghost":
      return {
        ...base,
        background: "transparent",
        color: "#111827",
        borderColor: "transparent",
      };
    case "primary":
    default:
      return {
        ...base,
        background: "#2563eb",
        color: "#ffffff",
      };
  }
};

export const Button = <E extends React.ElementType = "button">(
  props: ButtonProps<E>
) => {
  const { as, variant = "primary", children, ...rest } = props;
  const Component = as || "button";

  return (
    <Component style={getButtonStyle(variant)} {...(rest as any)}>
      {children}
    </Component>
  );
};
 