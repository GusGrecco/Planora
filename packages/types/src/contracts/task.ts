import type { Task } from "../domain/task";
import type { TaskPriority } from "../enums/task-priority";
import type { TaskStatus } from "../enums/task-status";
import type { PaginatedResponse, PaginationParams } from "./common";

export type CreateTaskRequest = {
    title: string;
    description?: string;
    priority: TaskPriority;
    parentTaskId?: string;
    templateId?: string;
    dueDate?: string;
};

export type UpdateTaskRequest = Partial<
    Omit<CreateTaskRequest, "templateId">
> & {
    status?: TaskStatus;
};

export type TaskResponse = Task;

export type ListTasksQuery = PaginationParams & {
    status?: TaskStatus;
    parentTaskId?: string | null;
    dueBefore?: string;
    dueAfter?: string;
};

export type ListTasksResponse = PaginatedResponse<TaskResponse>;
