import { Router } from "express"
import { makeThemeController } from "../modules/themes/theme.controller.js"

export const themesRouter = () => {
    const r = Router()
    const ctrl = makeThemeController()

    r.get("/", ctrl.list)

    return r
}