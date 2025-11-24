import { makeThemeRepoSequelize } from "./theme.repo.sequelize.js"

export const makeThemeService = () => {
    const repo = makeThemeRepoSequelize()

    const list = async () => {
        return repo.findAll()
    }

    return { list }
}