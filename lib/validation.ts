import {z} from "zod";

export const authFormSchema = (type:FormType) => z.object({
    name: type==='sign-in'?z.string().min(4,{
        message: "The user's full name must be at least 4 characters"
    }
    ).max(24,{
        message:"The user's full name must not exceed 24 characters"
    }):z.string().optional(),
    email:z.string().email(),
    password: z.string().min(3),
})