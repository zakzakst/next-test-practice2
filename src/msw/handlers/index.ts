import type { RequestHandler } from "msw";

import { testHandler } from "./test";

export const handlers: RequestHandler[] = [testHandler];
