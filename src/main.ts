import { Hono } from "@hono/hono";
import { appRoutes } from "./routes/index.ts";
import { errorHandler } from "./middlewares/errorHandler.ts";

const app = new Hono();

app.onError(errorHandler);

app.route("/", appRoutes);

Deno.serve(app.fetch);
