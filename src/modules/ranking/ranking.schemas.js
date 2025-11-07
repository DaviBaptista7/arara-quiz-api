import { z } from 'zod';

export const AddScoreToRankingSchema = z.object({
    // O user_id será o FK no Ranking. É bom validar o tipo.
    userId: z.string().uuid("User ID must be a valid UUID format"), 
    
    // A pontuação que o usuário alcançou
    score: z.number()
        .int("Score must be an integer")
        .nonnegative("Score must be non-negative"),
});

export const GetRankingWithUserPositionSchema = z.object({
    // ID do usuário logado para buscar sua posição
    userId: z.string().uuid("User ID must be a valid UUID format"), 
    
    // Opcional: Número de itens do ranking que devem ser retornados (ex: top 10)
    limit: z.coerce.number().int().positive().optional().default(10), 
});