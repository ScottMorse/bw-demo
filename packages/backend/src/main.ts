import { DEV_BACKEND_PORT, DEV_FRONTEND_PORT, type DemoData } from "shared";

const simpleEndpoint = (path: string, data: object | string) => ({
  [path]: {
    GET: () => {
      console.debug(`GET ${path}`);
      return new Response(JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": `http://localhost:${DEV_FRONTEND_PORT}`,
        },
      });
    },
  },
});

if (import.meta.main) {
  console.debug("Starting backend server...");
  Bun.serve({
    port: DEV_BACKEND_PORT,
    routes: {
      ...simpleEndpoint("/api/status", "OK"),
      ...simpleEndpoint("/api/demo-data", {
        message: "Hello from the backend!",
      } satisfies DemoData),
    },
  });
}
