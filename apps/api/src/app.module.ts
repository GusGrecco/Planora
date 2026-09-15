import { MiddlewareConsumer, Module, type NestModule } from "@nestjs/common";
import { APP_PIPE } from "@nestjs/core";
import { createObserveModule } from "@nestjs/observe";

import { AppConfigModule } from "./config/app-config.module.js";
import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";
import { PrismaModule } from "./prisma/prisma.module.js";
import { RequestIdMiddleware } from "./common/middleware/request-id.middleware.js";
import { ZodValidationPipe } from "./common/validation/zod-validation.pipe.js";

export const { ObserveModule, ObserveInstrument } = createObserveModule();

/**
 * Root application module. Hosts global infrastructure (config,
 * request-id middleware, global validation pipe) alongside Observe
 * (telemetry — currently using placeholder credentials, see #32
 * discussion) and Prisma (not yet connected to any feature). Feature/
 * domain modules (Auth, Tasks, Templates, Calendar) are registered here
 * as they're implemented.
 */
@Module({
  imports: [
    AppConfigModule,
    // Distributed tracing, auto-correlated logs, request/job metrics,
    // error telemetry, alarms, and more — out of the box. Sign up at
    // https://observe.nestjs.com
    // NOTE: currently configured with placeholder credentials
    // ('YOUR_APP_KEY'/'YOUR_APP_SECRET') — will fail telemetry auth
    // (401) at runtime without blocking the app. Kept as-is per
    // project decision (#32); remove or configure with real
    // credentials later.

    // ObserveModule.forRoot({
    //   appKey: "YOUR_APP_KEY",
    //   appSecret: "YOUR_APP_SECRET",
    //   serviceId: "api",
    // }),

    PrismaModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_PIPE, useClass: ZodValidationPipe },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdMiddleware).forRoutes("*path");
  }
}