import { Hono } from "@hono/hono";
import { balanceRoutes } from "./balanceRoutes.ts";
import { eventRoutes } from "./eventRoutes.ts";

const appRoutes = new Hono();

appRoutes.route("/balance", balanceRoutes);

appRoutes.route("/event", eventRoutes);

export { appRoutes };
