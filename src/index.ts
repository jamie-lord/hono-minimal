import { Hono } from "hono";
import { poweredBy } from "hono/powered-by";
import jwt from "@tsndr/cloudflare-worker-jwt";
import { v4 as uuidv4 } from "uuid";

const app = new Hono();

app.use("*", poweredBy());

app.get("/", async (c) => {
  const id = uuidv4();
  const test = await jwt.sign({ jti: id }, "test");
  return c.text(`Hello Hono! ${test} ${id}`);
});

export default app;
