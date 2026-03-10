// src/pages/Settings.tsx
import React from "react";
import { Page } from "../components/layout/Page";
import { Card } from "../components/layout/Card";
import { Stack } from "../components/layout/Stack";
import { Button } from "../components/ui/Button";

export const Settings: React.FC = () => {
  return (
    <Page>
      <h1>Settings</h1>

      <Stack gap={16}>
        <Card title="Profile">
          <p>Username: John Doe</p>
          <Button>Edit</Button>
        </Card>

        <Card title="Theme">
          <p>Light / Dark Mode</p>
          <Button>Toggle Theme</Button>
        </Card>
      </Stack>
    </Page>
  );
};
