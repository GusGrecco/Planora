export const ReminderStatus = {
    PENDING: "PENDING",
    SENT: "SENT",
    DISMISSED: "DISMISSED",
} as const;

export type ReminderStatus = (typeof ReminderStatus)[keyof typeof ReminderStatus];

export const REMINDER_STATUS_VALUES = Object.values(ReminderStatus) as [
    ReminderStatus,
    ...ReminderStatus[],
];
