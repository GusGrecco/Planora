import { registerRootComponent } from "expo";
import {} from "@planora/types";

import App from "./App";
import { setupGlobalErrorHandlers } from "./src/app/error-handling/setup-global-error-handlers";

setupGlobalErrorHandlers();

registerRootComponent(App);
