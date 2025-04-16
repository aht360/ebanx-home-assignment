import { Hono } from "@hono/hono";
import { balanceRoutes } from "./balanceRoutes.ts";
import { eventRoutes } from "./eventRoutes.ts";
import { resetRoutes } from "./resetRoutes.ts";

const appRoutes = new Hono();

appRoutes.route("/balance", balanceRoutes);

appRoutes.route("/event", eventRoutes);

appRoutes.route("/reset", resetRoutes);

export { appRoutes };
