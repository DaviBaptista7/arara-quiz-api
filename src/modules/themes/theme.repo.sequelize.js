import { Theme } from "../../models/Theme.js"

export const makeThemeRepoSequelize = () => {
    const findById = async ({ id }) => {

        const theme = await Theme.findByPk(id)

        return theme ? theme.toJSON() : null
    }

    const findAll = async () => {
        const themes = await Theme.findAll()

        return themes.map(theme => theme.toJSON())
    }

    return { findAll, findById }
}