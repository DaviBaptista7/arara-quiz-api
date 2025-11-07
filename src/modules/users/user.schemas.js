import { z } from 'zod';

export const createUserSchema = z.object({
    // Usamos .min() aqui, pois o hash será criado depois.
    // O backend será responsável por criar o password_hash.
    password: z.string().min(8, "Password must be at least 8 characters long"), 
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email format"),
    nickname: z.string().min(3, "Nickname must be at least 3 characters").max(20),
});

// O login pode ser feito por email 
export const LoginUserSchema = z.object({
    // Utilizamos um union para aceitar email.
    email: z.string().email().min(1, "Email is required"), 
    password: z.string().min(1, "Password is required"),
});

