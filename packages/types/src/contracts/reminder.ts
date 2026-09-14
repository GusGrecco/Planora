import type { Reminder } from "../domain/reminder";

export type CreateReminderRequest = {
    taskId: string;
    remindAt: string;
    syncToDeviceCalendar?: boolean;
};

export type UpdateReminderRequest = Partial<
    Omit<CreateReminderRequest, "taskId">
>;

export type ReminderResponse = Reminder;
