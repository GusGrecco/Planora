import { NestFactory } from "@nestjs/core";
import { VersioningType } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { AppModule } from "./app.module.js";
import { ZodValidationPipe } from "./common/validation/zod-validation.pipe.js";
import type { Env } from "./config/env.validation.js";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api");
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: "1",
  });

  app.enableCors();
  app.useGlobalPipes(new ZodValidationPipe());

  const configService = app.get(ConfigService<Env, true>);
  const port = configService.get("PORT", { infer: true });

  await app.listen(port);
}

bootstrap();
