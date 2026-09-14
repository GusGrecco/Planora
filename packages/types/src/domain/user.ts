/**
 * A Planora user. Framework-agnostic — no ORM/decorator annotations
 * (those belong to the API's Prisma models, which are a separate
 * concern from this shared contract).
 */
export type User = {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
};
