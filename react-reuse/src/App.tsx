import React from "react";
import { Page } from "./components/layout/Page";
import { Card } from "./components/layout/Card";
import { Button } from "./components/ui/Button";
import { Toggle } from "./components/ui/Toggle";
import { Modal } from "./components/ui/Modal";
import { Stack } from "./components/layout/Stack";

export const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <Page dark={darkMode}>
      <h1>Reusable Components Demo</h1>

      <Stack gap={16}>
        <Card title="Polymorphic Button & Styled Variants">
          <Stack gap={8}>
            <Button variant="primary" onClick={() => alert("Primary clicked")}>
              Primary button
            </Button>

            <Button variant="outline" onClick={() => alert("Outline clicked")}>
              Outline button
            </Button>

            {/* Polymorphic: render as <a> */}
            <Button
              as="a"
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
              variant="ghost"
            >
              Link styled as button (polymorphic)
            </Button>
          </Stack>
        </Card>

        <Card title="Overloaded Props: Controlled vs Uncontrolled Toggle">
          <Stack gap={8}>
            {/* Uncontrolled usage */}
            <Toggle label="Subscribe (uncontrolled)" defaultChecked />

            {/* Controlled usage */}
            <Toggle
              label="Dark mode (controlled)"
              checked={darkMode}
              onChange={setDarkMode}
            />
          </Stack>
        </Card>

        <Card title="Compound Components: Modal">
          <Button variant="primary" onClick={() => setModalOpen(true)}>
            Open Modal
          </Button>

          <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
            <Modal.Backdrop />
            <Modal.Container>
              <Modal.Header>Reusable Modal</Modal.Header>
              <Modal.Body>
                This modal is built as a compound component: Modal, Modal.Header,
                Modal.Body, Modal.Footer, etc.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="outline" onClick={() => setModalOpen(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal.Container>
          </Modal>
        </Card>
      </Stack>
    </Page>
  );
};
 