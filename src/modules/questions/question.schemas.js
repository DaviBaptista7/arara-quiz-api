import { z } from 'zod';

export const questionIdParams = z.object({
    themeId: z.uuid("Theme ID must be a valid UUID format"),
});