import type { Task } from "./task";

/**
 * A Subtask is a regular Task linked to a parent via `parentTaskId` —
 * not a distinct entity (per the project's data model). This alias
 * exists for semantic clarity at call sites (e.g. function signatures
 * that specifically expect a child task), without duplicating Task's
 * shape.
 */
export type Subtask = Task & { parentTaskId: string };
