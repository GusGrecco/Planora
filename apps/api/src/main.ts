import { NestFactory } from "@nestjs/core";
import { VersioningType } from "@nestjs/common";

import { AppModule } from "./app.module.js";
import {} from "@planora/types";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // API prefix + versioning strategy: all routes are served under
  // /api/v{n}, e.g. /api/v1/tasks. URI-based versioning was chosen for
  // explicitness and easy debugging (visible directly in the URL),
  // over header-based versioning.
  app.setGlobalPrefix("api");
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: "1",
  });

  app.enableCors();

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
}

bootstrap();