import * as z from "zod";

export const NewsletterSchema = z.object({
    name: z
        .string("Fill in your name")
        .min(3, "Your name must be at least 3 characters long")
        .max(50, "Your name seems unreasonably long, please choose a shorter nickname"),
    email: z.string("Fill in your email").email("Please provide a valid email"),
});


export function GetErrors<T>(error: z.ZodError<T>){
    return z.flattenError(error)
}
