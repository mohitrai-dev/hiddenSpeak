import {z} from "zod"

export const usernameValidation = z
    .string()
    .min(2, "userName must be atleast 2 characters")
    .max(20, "userName must be no more than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/,"userName must not be contain special character")

    export const signUpSchema = z.object({
        username: usernameValidation,
        email:  z.string().email({message: "invalid email address"}),
        password: z.string().min(6, {message: "password must be atleast 6 characters"})

    })