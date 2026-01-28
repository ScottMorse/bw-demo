import { createFileSystemProject } from 'bun-workspaces';

const project = createFileSystemProject();

if(import.meta.main) {
  const { output } = project.runScriptAcrossWorkspaces({
    script: 'dev',
    parallel: true
  });

  for await (const { outputChunk, scriptMetadata } of output) {
    console.log(`[${scriptMetadata.workspace.name}] ${outputChunk.decode().trim()}`);
  }
}
