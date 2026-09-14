import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

/**
 * Centralizes application configuration loading. Currently wraps
 * @nestjs/config with no validation — schema-based environment
 * validation is implemented in the next sub-issue of #30 (Configure
 * Environment Validation), which will add a `validate` function here
 * without changing how feature modules consume ConfigService.
 */
@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [".env"],
        }),
    ],
})
export class AppConfigModule { }
