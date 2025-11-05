import { z } from 'zod';

export const createQuestionSchema = z.object({
answers: z.string().min(1, 'name is required'),
alternetives: z.number().nonnegative('price must be >= 0')
question:
difficulty:  
score:
explanation:
});