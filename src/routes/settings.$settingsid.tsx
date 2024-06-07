import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings/$settingsid")({
  component: SettingsId,
});

function SettingsId() {

  const { settingsid } = Route.useParams();

  console.log("Settings id", settingsid)

  return <div>Settings {settingsid}</div>;
}
