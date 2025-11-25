import { Router } from "express"
import { makeQuestionsController } from "../modules/questions/question.controller.js"
import { validate } from "../middlewares/validate.js"
import { questionIdParams } from "../modules/questions/question.schemas.js"

export const questionsRouter = () => {
    const r = Router()
    const ctrl = makeQuestionsController()

    r.get("/:themeId", validate({ params: questionIdParams }), ctrl.list)

    return r
}