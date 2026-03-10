import React from "react";

interface ModalContextValue {
  open: boolean;
  onClose: () => void;
}

const ModalContext = React.createContext<ModalContextValue | undefined>(
  undefined
);

const useModalContext = () => {
  const ctx = React.useContext(ModalContext);
  if (!ctx) {
    throw new Error("Modal subcomponent must be used within <Modal>.");
  }
  return ctx;
};

interface ModalRootProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalRoot: React.FC<ModalRootProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <ModalContext.Provider value={{ open, onClose }}>
      {children}
    </ModalContext.Provider>
  );
};

const Backdrop: React.FC = () => {
  const { onClose } = useModalContext();
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(15, 23, 42, 0.55)",
        backdropFilter: "blur(2px)",
        zIndex: 10,
      }}
    />
  );
};

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { onClose } = useModalContext();
  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 20,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: 16,
          padding: "1.25rem 1.5rem",
          minWidth: 320,
          maxWidth: "90vw",
          boxShadow: "0 18px 40px rgba(15,23,42,0.4)",
          pointerEvents: "auto",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 12,
            right: 16,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            fontSize: 18,
          }}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

const Header: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 style={{ marginTop: 0, marginBottom: "0.75rem" }}>{children}</h3>
);

const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ marginBottom: "0.75rem" }}>{children}</div>
);

const Footer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "flex-end",
      gap: 8,
      marginTop: "0.5rem",
    }}
  >
    {children}
  </div>
);

export const Modal = Object.assign(ModalRoot, {
  Backdrop,
  Container,
  Header,
  Body,
  Footer,
});

 