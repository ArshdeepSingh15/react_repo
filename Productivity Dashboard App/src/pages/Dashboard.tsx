import React from "react";
import { Page } from "../components/layout/Page";
import { Card } from "../components/layout/Card";
import { Stack } from "../components/layout/Stack";
import { Button } from "../components/ui/Button";

export const Dashboard: React.FC = () => {
  return (
    <Page>
      <h1>Welcome to Productivity Dashboard</h1>

      <Stack gap={16}>
        <Card title="Overview">
          <p>You have 5 tasks and 2 notes.</p>
          <Button>View Tasks</Button>
          <Button>View Notes</Button>
        </Card>

        <Card title="Quick Actions">
          <Button>New Task</Button>
          <Button>New Note</Button>
        </Card>
      </Stack>
    </Page>
  );
};