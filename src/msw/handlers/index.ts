import type { RequestHandler } from "msw";

import { testHandlers } from "./test";

export const handlers: RequestHandler[] = [...testHandlers];
