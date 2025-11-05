import { z } from 'zod';

export const registerSchema = z.object({
    name: z.string().min(1, 'name is required'),
    email: z.email('invalid email'),
    nickname: z.string().min(1, 'nickname is required'),
    password: z.string().min(6, 'password must be at least 6 chars')
});

export const loginSchema = z.object({
    email: z.email('invalid email'),
    password: z.string().min(6, 'password must be at least 6 chars')
});

