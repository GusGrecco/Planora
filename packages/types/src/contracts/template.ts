import type { Template, TemplateItem } from "../domain/template";
import type { TaskPriority } from "../enums/task-priority";
import type { TaskResponse } from "./task";

export type CreateTemplateItemRequest = {
    title: string;
    description?: string;
};

export type CreateTemplateRequest = {
    name: string;
    description?: string;
    priority: TaskPriority;
    items: CreateTemplateItemRequest[];
};

export type UpdateTemplateRequest = Partial<CreateTemplateRequest>;

export type TemplateResponse = Template & {
    items: TemplateItem[];
};

/**
 * Using a template creates a new Task (and its subtasks) from the
 * template's structure — see docs/REQUIREMENTS.md section 11.
 */
export type UseTemplateRequest = {
    dueDate?: string;
};

export type UseTemplateResponse = {
    task: TaskResponse;
    subtasks: TaskResponse[];
};
