import { Hono } from "@hono/hono";
import { getAccountController } from "../config/dependencies.ts";
import { validateEventRequest } from "../middlewares/validateEventRequest.ts";

const eventRoutes = new Hono();
const controller = getAccountController();

eventRoutes.post("/", validateEventRequest, (c) => controller.createEvent(c));

export { eventRoutes };
