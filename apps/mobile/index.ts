import { registerRootComponent } from "expo";

import App from "./App";
import { setupGlobalErrorHandlers } from "./src/app/error-handling/setup-global-error-handlers";

setupGlobalErrorHandlers();

registerRootComponent(App);
