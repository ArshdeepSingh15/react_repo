// src/pages/Notes.tsx
import React from "react";
import { Page } from "../components/layout/Page";
import { Card } from "../components/layout/Card";
import { Stack } from "../components/layout/Stack";
import { Button } from "../components/ui/Button";

export const Notes: React.FC = () => {
  return (
    <Page>
      <h1>Notes</h1>

      <Stack gap={16}>
        <Card title="Note 1">
          <p>Remember to check API for tasks.</p>
          <Button>Edit</Button>
        </Card>

        <Card title="Note 2">
          <p>Setup context and hooks in Part 3.</p>
          <Button>Edit</Button>
        </Card>
      </Stack>
    </Page>
  );
};
