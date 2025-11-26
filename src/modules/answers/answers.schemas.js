import { z } from 'zod';

export const answerSchemas = {
    createOrUpdate: z.object({
        questionId: z.uuid('Invalid question ID'),
        answer: z.number().int("Invalid answer ID"),
    }),
};