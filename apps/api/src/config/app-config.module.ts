import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { validateEnv } from "./env.validation.js";

/**
 * Centralizes application configuration loading and validation.
 * `validate` runs once at startup — an invalid environment throws
 * during Nest's bootstrap phase, before the app starts listening.
 */
@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [".env"],
            validate: validateEnv,
        }),
    ],
})
export class AppConfigModule { }
