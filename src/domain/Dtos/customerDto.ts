import { object, string, email, pipe, InferInput } from "valibot";

const emailSchema = pipe(string(), email());

export const CustomerSchema = object({
    jwt: string(),
    email: emailSchema
});

export type CustomerDto = InferInput<typeof CustomerSchema>;