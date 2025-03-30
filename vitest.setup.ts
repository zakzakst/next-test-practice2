import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "@/msw/setup/server";

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
