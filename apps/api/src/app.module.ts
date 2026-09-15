import { Module } from "@nestjs/common";

import { AppConfigModule } from "./config/app-config.module.js";
import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";

/**
 * Root application module. Hosts global infrastructure modules only.
 * Feature/domain modules (Auth, Tasks, Templates, Calendar) — and, once
 * needed, PrismaModule — are registered here as they're implemented in
 * their own issues.
 */
@Module({
  imports: [AppConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
