/**
 * A scheduled reminder associated with a task. May optionally reference
 * a device calendar event — the calendar event's own shape belongs to
 * the mobile app's Expo Calendar integration, not to this shared
 * contract; only the reference id is shared.
 */

import type { ReminderStatus } from "../enums/reminder-status";

export type Reminder = {
    id: string;
    taskId: string;
    remindAt: string;
    status: ReminderStatus;
    deviceCalendarEventId: string | null;
    createdAt: string;
};
