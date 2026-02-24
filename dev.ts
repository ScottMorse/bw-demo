import { createFileSystemProject } from "bun-workspaces";

const project = createFileSystemProject();

if (import.meta.main) {
  const { output } = project.runScriptAcrossWorkspaces({
    script: "dev",
    parallel: true,
  });

  for await (const { chunk, metadata } of output.text()) {
    process[metadata.streamName].write(`[${metadata.workspace.name}] ${chunk}`);
  }
}
