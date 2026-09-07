# Planora — Requirements & Project Plan

## 1. Project Overview

**Planora** is a mobile-first personal planner and task-management application focused on organizing tasks, tracking execution, reusing common workflows, and remaining useful when the device is offline.

**Tagline:**

> Planora — Your tasks. Your time. Your flow.

The project is also a portfolio project intended to demonstrate practical experience with mobile development, frontend architecture, backend development, relational databases, offline-first design, synchronization, testing, and scalable engineering practices.

## 2. Goals

### Primary goals

- Provide a practical personal task planner.
- Support online and offline usage.
- Organize tasks by day, week, month, and year.
- Track task status and execution history.
- Support parent tasks and subtasks.
- Allow common task structures to be saved as reusable templates.
- Provide reminders and device-calendar integration.
- Synchronize local changes with the backend when connectivity is available.
- Maintain a maintainable, testable, and scalable architecture.

### Secondary goals

- Create a strong portfolio demonstration.
- Keep the MVP focused instead of overbuilding infrastructure.
- Leave room for future analytics, exports, and additional clients.

## 3. Scope Principle

Development is incremental.

**Phase 0:** stabilize the environment.

**Phase 1:** establish application architecture.

**Phase 2 onward:** implement the product domain one capability at a time.

Advanced analytics, exports, collaboration, and complex recurring scheduling are not initial priorities.

## 4. Platform

### Initial platform

- Mobile
- React Native
- Expo
- TypeScript

### Future possibilities

- Web client
- Additional calendar integrations
- Advanced analytics
- Export functionality

These are outside the initial MVP.

## 5. Technology Stack

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
- Refresh tokens

### Development

- pnpm
- pnpm workspaces
- Docker Compose
- Vitest
- React Native Testing Library
- Supertest
- Oxlint / ESLint
- Prettier
- GitHub Actions

## 6. Architecture

The intended offline-first flow is:

```text
┌─────────────────────┐
│ Mobile UI            │
│ React Native / Expo  │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Client State         │
│ Zustand              │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Server State         │
│ TanStack Query       │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Local Database       │
│ SQLite + Drizzle     │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Sync Queue           │
└──────────┬──────────┘
           │ Internet
           ↓
┌─────────────────────┐
│ NestJS API           │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ PostgreSQL + Prisma  │
└─────────────────────┘
```

The mobile local database is the primary source for offline reads and writes. The backend provides authenticated server persistence and synchronization.

## 7. Core Domain Concepts

### User

An authenticated Planora user.

### Task

A unit of work belonging to a user. A task may have a title, description, priority, status, parent task, template relationship, executions, history, and reminders.

### Subtask

A task linked to another task as its child.

Example:

```text
Clean the bedroom
├── Organize wardrobe
├── Clean desk
└── Change bed sheets
```

Subtasks are regular tasks with a parent-child relationship.

### Task Template

A reusable task preset. A template is **not** a recurring schedule.

Example:

```text
Weekly Bedroom Cleaning
├── Organize wardrobe
├── Clean desk
└── Change bed sheets
```

Using a template creates a new task structure.

### Template Usage

Records when a template was used and which task it generated. This supports future usage counts, frequency analysis, and export features.

### Task Reminder

A scheduled reminder associated with a task. It may optionally reference a device calendar event.

## 8. Task Statuses

Initial statuses:

```text
TODO
DOING
DONE
```

The final implementation must define valid transitions, including whether completed tasks can be reopened.

## 9. Execution History

Execution history records actual work periods:

- `startedAt`
- optional `completedAt`

A task may have multiple execution periods, supporting pause/resume workflows.

For a task with subtasks, the history view should expose:

- main task start/end
- number of subtasks
- expandable subtask history
- individual subtask start/end

## 10. Time Organization

Tasks should be viewable and organized across:

- day
- week
- month
- year

The planner should provide time-based organization without forcing users to recreate task definitions.

## 11. Task Reuse

A task can optionally become a reusable template.

```text
Create template
      ↓
Reuse template
      ↓
Create new task
      ↓
Complete task
      ↓
Record template usage
```

Templates are reusable definitions, not automatic recurring schedules.

## 12. Calendar Integration

Calendar integration is primarily for reminders.

```text
Planora Task
    │
    └── Optional Reminder
            │
            └── Device Calendar Event
```

Planora remains the source of truth for task state.

## 13. Offline-First Requirements

Core workflows must remain available without network connectivity.

Offline operations should eventually include:

- viewing locally available tasks
- creating tasks
- updating tasks
- changing status
- working with subtasks
- viewing local history
- creating and using templates

Synchronization:

```text
Local change
    ↓
Sync queue
    ↓
API
    ↓
PostgreSQL
```

The conflict-resolution strategy must be explicitly defined before complex synchronization is implemented.

## 14. Initial Data Model

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

Relationships:

```text
User
 ├── Tasks
 ├── Task Templates
 └── Task Reminders

Task
 ├── Subtasks
 ├── Executions
 ├── History
 ├── Reminders
 ├── Template
 └── Template Usages

TaskTemplate
 ├── Template Items
 ├── Usages
 └── Generated Tasks
```

## 15. Functional Requirements

### FR-01 — Authentication

Users must be able to authenticate securely.

Initial strategy: JWT access token + refresh token.

### FR-02 — Task Creation

Users must be able to create tasks with title, optional description, priority, and status.

### FR-03 — Task Status

Users must be able to work with TODO, DOING, and DONE states. Valid transitions must be explicitly defined.

### FR-04 — Subtasks

Users must be able to create child tasks under a parent task.

### FR-05 — Execution Tracking

The system must record task execution periods.

### FR-06 — History

The system must preserve status and execution history.

### FR-07 — Time Organization

Users must be able to organize and view tasks by time period.

### FR-08 — Templates

Users must be able to save task structures as reusable templates.

### FR-09 — Template Usage

The system must record template usage.

### FR-10 — Reminders

Users must be able to associate reminders with tasks.

### FR-11 — Calendar Integration

The mobile application must be able to create and manage calendar events for reminders when permission is granted.

### FR-12 — Offline Operation

Core task operations must work without a network connection.

### FR-13 — Synchronization

Local changes must synchronize with the backend when connectivity returns.

## 16. Non-Functional Requirements

### Performance

- Core interactions should feel immediate.
- Local operations should not wait for network latency.
- Avoid unnecessary API requests.
- Cache server state appropriately.

### Reliability

- Local changes must survive temporary connectivity loss.
- Sync failures must be retryable.
- Database relationships must preserve integrity.

### Security

- Never commit secrets.
- Authenticate protected API requests.
- Validate input at the server boundary.
- Hash passwords if local password authentication is implemented.
- Protect refresh tokens.
- Avoid exposing unnecessary personal data.

### Maintainability

- Strong TypeScript typing.
- Clear module boundaries.
- Reusable components.
- Centralized validation.
- Automated tests for important behavior.
- Consistent formatting and linting.

### Scalability

The architecture should allow additional clients, integrations, synchronization complexity, analytics, and exports without a complete rewrite.

## 17. MVP

The MVP should represent a complete, useful user workflow.

### MVP features

1. Authentication foundation
2. Task creation
3. Task editing
4. Task deletion
5. TODO / DOING / DONE
6. Subtasks
7. Execution history
8. Planner by date
9. Local SQLite persistence
10. Basic API synchronization
11. Reusable task templates
12. Template usage tracking
13. Basic reminders
14. Basic calendar integration

### Out of MVP priority

- Advanced analytics
- Complex reports
- Multiple export formats
- Multiple calendar providers
- Collaborative tasks
- Social features
- Complex recurring scheduling

## 18. Development Phases

### Phase 0 — Environment

**Status: Completed**

Includes monorepo, Expo, NativeWind, NestJS, PostgreSQL, Docker Compose, pgAdmin, Prisma 7, environment configuration, tests foundation, and Git configuration.

### Phase 1 — Architecture Foundation

- shared package structure
- API module conventions
- mobile architecture
- local database foundation
- API client
- validation boundaries
- state-management conventions

### Phase 2 — Authentication

- user model
- JWT
- refresh tokens
- protected routes
- mobile session persistence

### Phase 3 — Core Tasks

- task CRUD
- status transitions
- priorities
- subtasks
- task execution

### Phase 4 — History and Planner

- task history
- execution history
- day/week/month/year organization
- planner views

### Phase 5 — Templates

- template creation
- template items
- template reuse
- usage tracking

### Phase 6 — Offline-First

- SQLite schema
- local repositories
- sync queue
- connectivity handling
- retry behavior
- conflict strategy

### Phase 7 — Reminders and Calendar

- reminder model
- reminder scheduling
- Expo Calendar permissions
- calendar event lifecycle

### Phase 8 — Quality

- unit tests
- integration tests
- E2E tests
- linting
- formatting
- CI
- error handling
- performance review

### Phase 9 — Portfolio Release

- production build
- documentation
- screenshots
- demo data
- deployment
- portfolio README
- limited public demo

## 19. Testing Strategy

### Mobile

Use Vitest and React Native Testing Library for component, state, persistence, synchronization, and critical-flow testing.

### API

Use Vitest and Supertest for unit, integration, controller, and E2E coverage.

### Critical scenarios

- task creation
- status transitions
- subtasks
- execution history
- template reuse
- template usage tracking
- offline mutations
- synchronization
- reminders

## 20. Engineering Principles

- **Local-first UX:** interactions should feel immediate.
- **Server synchronization authority:** authenticated server persistence remains available online.
- **Explicit boundaries:** separate UI, state, persistence, synchronization, API, and database responsibilities.
- **Avoid premature complexity:** introduce infrastructure only when a real requirement justifies it.
- **Reuse without overengineering:** templates should remain a focused domain feature.
- **Test behavior:** prioritize meaningful behavior over implementation details.
- **Document decisions:** environment, architecture, and important troubleshooting knowledge should remain documented.

## 21. Portfolio Success Criteria

Planora should demonstrate practical ability to:

- structure a monorepo
- build a React Native application
- build a NestJS backend
- model a relational database
- use Prisma and PostgreSQL
- design offline-first behavior
- handle synchronization
- write automated tests
- maintain a clean Git workflow
- document technical decisions
- build reusable UI and domain structures

The goal is engineering quality, not feature quantity.
