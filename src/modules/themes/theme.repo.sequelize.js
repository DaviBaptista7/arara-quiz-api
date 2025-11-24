import { Theme } from "../../models/Theme.js"

export const makeThemeRepoSequelize = () => {
    const findAll = async () => {
        const themes = await Theme.findAll()

        return themes.map(theme => theme.toJSON())
    }

    return { findAll }
}