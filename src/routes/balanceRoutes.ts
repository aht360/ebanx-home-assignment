import { Hono } from "@hono/hono";
import { getAccountController } from "../config/dependencies.ts";
import { validateBalanceRequest } from "../middlewares/validateBalanceRequest.ts";

const balanceRoutes = new Hono();
const controller = getAccountController();

balanceRoutes.get("/", validateBalanceRequest, (c) => controller.getBalance(c));

export { balanceRoutes };
