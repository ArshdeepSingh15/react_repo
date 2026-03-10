import React from "react";

interface BaseToggleProps {
  label?: string;
}

// Uncontrolled version
interface UncontrolledToggleProps extends BaseToggleProps {
  defaultChecked?: boolean;
  checked?: never;
  onChange?: never;
}

// Controlled version
interface ControlledToggleProps extends BaseToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  defaultChecked?: never;
}

type ToggleProps = UncontrolledToggleProps | ControlledToggleProps;

export const Toggle: React.FC<ToggleProps> = (props) => {
  const isControlled = "checked" in props && typeof props.checked === "boolean";

  const [internalChecked, setInternalChecked] = React.useState(
    "defaultChecked" in props && props.defaultChecked ? true : false
  );

  const checked = isControlled ? props.checked : internalChecked;

  const handleChange = () => {
    if (isControlled) {
      props.onChange(!props.checked);
    } else {
      setInternalChecked((prev) => !prev);
    }
  };

  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <span
        style={{
          width: 40,
          height: 22,
          borderRadius: 999,
          background: checked ? "#22c55e" : "#d1d5db",
          position: "relative",
          transition: "background 0.15s ease",
        }}
        onClick={handleChange}
      >
        <span
          style={{
            position: "absolute",
            top: 3,
            left: checked ? 20 : 3,
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "#ffffff",
            boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
            transition: "left 0.15s ease",
          }}
        />
      </span>
      {props.label && <span>{props.label}</span>}
    </label>
  );
};
 