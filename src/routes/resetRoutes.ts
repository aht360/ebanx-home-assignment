import { Hono } from "@hono/hono";
import { getAccountController } from "../config/dependencies.ts";

const resetRoutes = new Hono();
const controller = getAccountController();

resetRoutes.post("/", (c) => controller.reset(c));

export { resetRoutes };
