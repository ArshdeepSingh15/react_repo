// src/pages/Tasks.tsx
import React from "react";
import { Page } from "../components/layout/Page";
import { Card } from "../components/layout/Card";
import { Stack } from "../components/layout/Stack";
import { Button } from "../components/ui/Button";

export const Tasks: React.FC = () => {
  return (
    <Page>
      <h1>Tasks</h1>

      <Stack gap={16}>
        <Card title="Task 1">
          <p>Finish mini project setup</p>
          <Button>Mark Done</Button>
        </Card>

        <Card title="Task 2">
          <p>Prepare notes for Part 3</p>
          <Button>Mark Done</Button>
        </Card>
      </Stack>
    </Page>
  );
};
