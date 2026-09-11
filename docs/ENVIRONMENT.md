# Planora Environment, Troubleshooting & Command Reference

> Practical reference for setting up, validating, troubleshooting, and maintaining the Planora development environment.

## 1. Project Structure

Planora is a pnpm monorepo:

```text
planora/
├── apps/
│   ├── mobile/          # Expo + React Native
│   └── api/             # NestJS API
├── packages/            # Shared packages
├── docker-compose.yml
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── .gitignore
```

There should be one Git repository at the project root. `apps/mobile` and `apps/api` must not contain their own `.git` directories.

## 2. Baseline Environment

| Tool | Baseline |
|---|---|
| Node.js | 22.23.2 |
| pnpm | 10.10.0 |
| Expo | 57.0.20 |
| React Native | 0.86.3 |
| NativeWind | 4.2.6 |
| NestJS | 12 |
| Prisma | 7.10.0 |
| PostgreSQL | 18 |
| Package manager | pnpm |
| Tests | Vitest |

Use pnpm consistently. Do not mix `npm install` with `pnpm install` in the workspace.

## 3. Core Commands

### Versions

```bash
node -v
npm -v
pnpm -v
```

### Install dependencies

```bash
pnpm install
pnpm install --frozen-lockfile
```

Use `--frozen-lockfile` when validating a reproducible environment or CI installation.

### Git status

```bash
git status
git remote -v
```

## 4. Expo / React Native

Start the mobile app from `apps/mobile`:

```bash
pnpm expo start
```

Install an Expo/native dependency with the package manager explicitly selected:

```bash
npx expo install expo-sqlite --pnpm
npx expo install expo-calendar --pnpm
```

Regular dependencies:

```bash
pnpm add <package>
pnpm add -D <package>
```

Check Expo dependency compatibility:

```bash
npx expo install --check --pnpm
```

Run Expo Doctor:

```bash
pnpm dlx expo-doctor
```

A monorepo may cause Expo Doctor to report that the lockfile is not detected from the app directory. Do not create a second lockfile inside `apps/mobile`; keep the workspace lockfile at the repository root.

## 5. EAS CLI

A global EAS installation can fail on Windows with `ERR_PNPM_NO_GLOBAL_BIN_DIR`. Prefer:

```bash
pnpm dlx eas-cli@latest
```

Examples:

```bash
pnpm dlx eas-cli@latest --version
pnpm dlx eas-cli@latest login
```

## 6. PostgreSQL / Docker

Start PostgreSQL:

```bash
docker compose up -d
```

Check it:

```bash
docker compose ps
docker compose logs postgres
docker compose logs -f postgres
```

Stop containers while preserving named volumes:

```bash
docker compose down
```

### Important

Avoid using this unless you intentionally want to delete the local database volume:

```bash
docker compose down -v
```

The `-v` option removes Docker volumes and can delete local database data.

## 7. PostgreSQL Connection

Development connection:

```text
Host:     127.0.0.1
Port:     5432
Database: planora
User:     planora
Password: planora
```

Example API environment variable:

```env
DATABASE_URL="postgresql://planora:planora@localhost:5432/planora?schema=public"
```

Never commit `.env`. Commit `.env.example` instead.

## 8. PostgreSQL Port Conflicts on Windows

If Docker cannot bind port `5432`, inspect the port:

```cmd
netstat -ano | findstr :5432
```

Identify the process:

```cmd
tasklist | findstr <PID>
```

Inspect a Windows PostgreSQL service:

```cmd
sc query postgresql-x64-18
```

If a locally installed PostgreSQL service is occupying port `5432`, stop it from an elevated terminal:

```cmd
net stop postgresql-x64-18
```

Do not uninstall the Windows PostgreSQL installation unless it is no longer needed.

## 9. Prisma 7

Check versions:

```bash
pnpm prisma --version
```

The Prisma CLI and `@prisma/client` should be kept aligned.

Format and validate the schema:

```bash
pnpm prisma format
pnpm prisma validate
```

Create a development migration:

```bash
pnpm prisma migrate dev --name init
```

Later migrations:

```bash
pnpm prisma migrate dev --name <migration-name>
```

Generate the client:

```bash
pnpm prisma generate
```

Prisma 7 uses `prisma.config.ts`, an explicit output path for the `prisma-client` generator, and a PostgreSQL driver adapter for database connections.

Planora uses `@prisma/adapter-pg` / `PrismaPg` in the NestJS integration.

## 10. Prisma Troubleshooting

### Client not initialized

If you see an error telling you to run `prisma generate`:

```bash
pnpm prisma generate
```

### CLI/client mismatch

Check:

```bash
pnpm prisma --version
```

Align versions when necessary, for example:

```bash
pnpm add @prisma/client@7.10.0
pnpm add -D prisma@7.10.0
```

### Database unreachable

Check Docker:

```bash
docker compose ps
docker compose logs postgres
```

Check port `5432` on Windows:

```cmd
netstat -ano | findstr :5432
```

Also verify `DATABASE_URL`.

## 11. NestJS API

Development server:

```bash
pnpm start:dev
```

Build:

```bash
pnpm build
```

## 12. Tests

The API uses Vitest. Typical project scripts are:

```bash
pnpm test
pnpm test:watch
pnpm test:cov
```

Use the project's configured E2E script for end-to-end tests.

## 13. Git: Nested Repository Problem

If Git reports:

```text
warning: adding embedded git repository: apps/mobile
```

or:

```text
error: 'apps/api/' does not have a commit checked out
```

check for nested repositories:

```powershell
Test-Path apps\mobile\.git
Test-Path apps\api\.git
```

For a single-repository monorepo, both should return `False`.

Remove only the nested Git metadata:

```powershell
Remove-Item -Recurse -Force apps\mobile\.git
Remove-Item -Recurse -Force apps\api\.git
```

Then clear staging and stage again:

```bash
git reset
git add .
```

This does not delete source files.

## 14. Git Staging

Stage files:

```bash
git add .
```

Inspect staged files:

```bash
git status
```

Unstage everything without deleting files:

```bash
git reset
```

Commit:

```bash
git commit -m "chore: setup project environment"
```

Push:

```bash
git push origin main
```

## 15. Windows LF / CRLF Warnings

Warnings such as:

```text
LF will be replaced by CRLF
```

are line-ending warnings, not failures. They do not prevent staging or committing.

A `.gitattributes` policy can be added later if the project needs stricter cross-platform line-ending control.

## 16. Version-Control Rules

Version:

```text
package.json
pnpm-lock.yaml
pnpm-workspace.yaml
docker-compose.yml
.gitignore
apps/*/package.json
apps/api/prisma.config.ts
apps/api/prisma/schema.prisma
apps/api/prisma/migrations/
source code
reproducible environment configuration
```

Do not version:

```text
.env
node_modules/
dist/
.expo/
coverage/
apps/api/src/generated/prisma/
local database data
private keys/certificates
```

## 17. Environment Verification

From the repository root:

```bash
node -v
pnpm -v
pnpm install --frozen-lockfile
docker compose ps
```

For the API:

```bash
pnpm prisma validate
pnpm prisma generate
pnpm build
pnpm test
```

For Expo:

```bash
npx expo install --check --pnpm
pnpm dlx expo-doctor
pnpm expo start
```

Finally:

```bash
git status
```

The working tree should be clean unless there are intentional changes.

## 18. Mobile Environment Variables

Planora mobile uses Expo's built-in `.env` support (no additional library required).

### Naming convention

`EXPO_PUBLIC_<DOMAIN>_<NAME>` — only variables prefixed with `EXPO_PUBLIC_` are
exposed to the client bundle. Do not place secrets in mobile environment
variables, prefixed or not — the bundle can be inspected on device.

### Setup

1. Copy `apps/mobile/.env.example` to `apps/mobile/.env`.
2. Adjust values for your local environment (use your machine's LAN IP instead
   of `localhost` when testing on a physical device or Expo Go).
3. Restart the Expo dev server after changing `.env` (`pnpm expo start -c` to
   clear the cache if values don't seem to update).

### Required variables

| Variable                | Description                          | Example                 |
|--------------------------|---------------------------------------|--------------------------|
| `EXPO_PUBLIC_API_URL`    | Base URL of the Planora API           | `http://localhost:3000` |

### Rules

- Never commit `.env`. Commit `.env.example` instead.
- Values are validated at startup via `src/config/env.ts` (Zod) — the app
  fails fast with a clear error if a required variable is missing or invalid.
- Production/preview environment strategy (EAS build profiles, secret
  management) is defined in a separate issue.

## 19. Troubleshooting Workflow

1. Read the complete error.
2. Identify the layer: package manager, environment variable, port, Docker, Prisma, TypeScript, Expo, or Git.
3. Check versions and service state.
4. Fix the smallest possible layer.
5. Re-run the failing command.
6. Re-run broader environment validation.
7. Only then continue development.

Do not blindly upgrade dependencies to silence warnings. First determine whether the warning is actually blocking the environment.
