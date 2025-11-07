import { z } from 'zod';

// Este é um Schema para os PARAMS da rota (ex: /questions/by-theme/:themeId)
export const getQuestionsByThemeSchema = z.object({
    // Assumimos que a rota recebe o ID do tema
    themeId: z.string().uuid("Theme ID must be a valid UUID format"),
});