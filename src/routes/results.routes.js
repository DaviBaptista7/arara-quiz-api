import { Router } from 'express';
import { makeResultsController } from '../modules/results/results.controller.js';
import { ensureAuth } from '../middlewares/auth.js';

export const resultsRouter = () => {
    const r = Router();
    const ctrl = makeResultsController();

    r.use(ensureAuth)

    r.get('/', ctrl.getTotalScore);    
    r.get('/theme/:themeId', ctrl.getScoreByTheme);

    return r;
};