/**
 * A reusable task structure preset — not a recurring schedule. Using a
 * template creates a new Task (and its subtasks) from this definition.
 */
import type { TaskPriority } from "../enums/task-priority";

export type Template = {
    id: string;
    userId: string;
    name: string;
    description: string | null;
    priority: TaskPriority;
    createdAt: string;
    updatedAt: string;
};

/**
 * A single item within a template's structure — mirrors the subtask
 * shape a generated Task will have, without being a Task itself (no
 * status, no dates — those only exist once the template is used).
 */
export type TemplateItem = {
    id: string;
    templateId: string;
    title: string;
    description: string | null;
};
