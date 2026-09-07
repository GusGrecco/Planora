# Planora

> **Your tasks. Your time. Your flow.**

Planora is a mobile-first personal planner and task-management application focused on organizing tasks, tracking execution, reusing common workflows, and remaining useful when the device is offline.

It is also a portfolio project built to demonstrate modern mobile, frontend, backend, database, synchronization, testing, and scalable engineering practices.

## ✨ Goals

Planora is built around a simple idea:

> Your planner should help you manage your time, not make managing your planner another task.

The application aims to provide:

- Task management
- TODO / DOING / DONE workflow
- Subtasks
- Task execution history
- Day, week, month, and year organization
- Reusable task templates
- Template usage tracking
- Task reminders
- Calendar integration
- Offline-first usage
- Background synchronization

## 🏗️ Architecture

The intended offline-first flow is:

```text
Mobile UI
   ↓
Zustand / TanStack Query
   ↓
SQLite + Drizzle
   ↓
Sync Queue
   ↓
NestJS API
   ↓
PostgreSQL + Prisma
```

The mobile application keeps local data available for core workflows and synchronizes changes with the backend when connectivity is available.

## 🛠️ Tech Stack

### Mobile

- React Native
- Expo
- TypeScript
- NativeWind
- Zustand
- TanStack Query
- SQLite
- Drizzle ORM
- Expo Calendar

### Backend

- NestJS
- TypeScript
- Prisma
- PostgreSQL
- Zod
- JWT

### Tooling

- pnpm
- pnpm workspaces
- Docker Compose
- Vitest
- React Native Testing Library
- Supertest
- Oxlint / ESLint
- Prettier

## 📁 Repository Structure

```text
planora/
├── apps/
│   ├── mobile/       # React Native / Expo app
│   └── api/          # NestJS API
├── packages/         # Shared packages
├── docker-compose.yml
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites

- Node.js 22+
- pnpm 10+
- Docker Desktop
- Git

### 1. Clone the repository

```bash
git clone https://github.com/GusGrecco/Planora.git
cd planora
```

### 2. Install dependencies

```bash
pnpm install
```

For a reproducible installation:

```bash
pnpm install --frozen-lockfile
```

### 3. Configure environment variables

Create local environment files from the corresponding examples when available. Never commit `.env` files.

### 4. Start PostgreSQL

```bash
docker compose up -d
docker compose ps
```

### 5. Prepare Prisma

From `apps/api`:

```bash
pnpm prisma validate
pnpm prisma generate
```

For a development database migration:

```bash
pnpm prisma migrate dev
```

### 6. Start the API

From `apps/api`:

```bash
pnpm start:dev
```

### 7. Start the mobile application

From `apps/mobile`:

```bash
pnpm expo start
```

## 🧪 Testing

API tests use Vitest:

```bash
pnpm test
```

Coverage:

```bash
pnpm test:cov
```

Mobile UI behavior is intended to use React Native Testing Library alongside the project's test runner.

## 🔍 Environment Validation

```bash
node -v
pnpm -v
pnpm install --frozen-lockfile
docker compose ps
```

API:

```bash
pnpm prisma validate
pnpm prisma generate
pnpm build
```

Expo:

```bash
npx expo install --check --pnpm
pnpm dlx expo-doctor
```

## 🗄️ Database

Planora uses PostgreSQL for server-side persistence and Prisma as its ORM.

Initial domain entities:

```text
User
Task
TaskExecution
TaskHistory
TaskTemplate
TaskTemplateItem
TemplateUsage
TaskReminder
```

## 📱 Offline-First

A central technical goal is reliable offline usage:

```text
User action
    ↓
Local SQLite
    ↓
Sync queue
    ↓
API
    ↓
PostgreSQL
```

Core task interactions should not depend on network availability. Synchronization and conflict resolution are explicit architectural concerns.

## 📋 Core Concepts

### Tasks

Tasks can have:

- title
- description
- priority
- status
- subtasks
- execution periods
- history
- reminders

### Templates

Templates are reusable task presets, not recurring schedules.

Example:

```text
Weekly Bedroom Cleaning
├── Organize wardrobe
├── Clean desk
└── Change bed sheets
```

Using the template creates a new task structure and records the template usage.

### History

Planora tracks task status and execution history. For tasks with subtasks, history can expose the parent execution period and individual subtask periods.

## 🧭 Project Status

### Environment

**Completed**

- Monorepo
- Expo / React Native
- NativeWind
- NestJS
- PostgreSQL
- Docker Compose
- pgAdmin
- Prisma 7
- Prisma Client
- PostgreSQL driver adapter
- Environment configuration
- Vitest foundation
- Git configuration

### Product Development

**Planned**

- Authentication
- Core task management
- Subtasks
- Planner
- History
- Templates
- Offline database
- Synchronization
- Reminders
- Calendar integration
- Automated test coverage
- CI/CD

## 📚 Documentation

- [`docs/ENVIRONMENT.md`](docs/ENVIRONMENT.md) — environment setup, important commands, troubleshooting, and known configuration problems.
- [`docs/REQUIREMENTS.md`](docs/REQUIREMENTS.md) — product requirements, architecture, MVP scope, development phases, and engineering principles.

## 🧠 Engineering Principles

- Clean architecture
- Strong typing
- Reusable components
- Explicit domain boundaries
- Offline-first UX
- Scalable data modeling
- Automated testing
- Small and intentional dependencies
- Documentation
- Avoiding premature infrastructure complexity

## 🔐 Security

Never commit:

```text
.env
private keys
API secrets
database credentials
```

Use `.env.example` files to document required variables without exposing real values.

## 📌 Portfolio

Planora is intended to demonstrate practical experience with:

- React Native
- Expo
- TypeScript
- NativeWind
- State management
- Offline-first architecture
- SQLite
- NestJS
- PostgreSQL
- Prisma
- API design
- Synchronization
- Testing
- Docker
- Monorepo architecture

## 📄 License

This project is currently intended as a personal portfolio project.
