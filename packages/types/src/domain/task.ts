/**
 * Temporary string-literal unions for status/priority. Will be replaced
 * by formal shared enums in the next sub-issue of #24 (Define Shared
 * Enums) — Task/Subtask will import from there instead once it lands,
 * without changing this type's shape.
 */
import type { TaskPriority } from "../enums/task-priority";
import type { TaskStatus } from "../enums/task-status";

/**
 * A unit of work belonging to a user. May have subtasks (see
 * subtask.ts), a template origin, reminders, and — in later phases —
 * execution/history records (not part of this initial shared shape).
 */
export type Task = {
    id: string;
    userId: string;
    title: string;
    description: string | null;
    status: TaskStatus;
    priority: TaskPriority;
    parentTaskId: string | null;
    templateId: string | null;
    dueDate: string | null;
    createdAt: string;
    updatedAt: string;
};
