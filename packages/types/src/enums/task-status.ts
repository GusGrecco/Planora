/**
 * Task status. Defined as a const object (not a native TS `enum`) so it
 * works consistently across Metro/Babel (mobile) and ts-node/Nest (API)
 * without isolatedModules caveats, and so the value list can feed
 * z.enum() directly in @planora/validation.
 */
export const TaskStatus = {
    TODO: "TODO",
    DOING: "DOING",
    DONE: "DONE",
} as const;

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

/** Usable directly as `z.enum(TASK_STATUS_VALUES)`. */
export const TASK_STATUS_VALUES = Object.values(TaskStatus) as [
    TaskStatus,
    ...TaskStatus[],
];
