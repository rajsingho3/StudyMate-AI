import z from "zod";

export const signinSchema = z.object({
    email: z.string().email("Invalid Email"),
    password:z
        .string()
        .min(8, "Password must be at least 8 character")
        .regex(/[A-Z]/,"Must be include upper case ")
        .regex(/[0-9]/,"Must include a number ")
});