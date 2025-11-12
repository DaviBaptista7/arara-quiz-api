import { User } from "../../models/User.js";

export const makeUserRepoSequelize = () => {
    const create = async ({ name, email, passwordHash, nickname }) => {
        const user = await User.create({ name, email, passwordHash, nickname });
        return user.toJSON();
    }

    const findByEmail = async (email) => {
        const user = await User.findOne({ where: { email } });
        return user ? user.toJSON() : null;
    }

    const findById = async (id) => {
        const user = await User.findByPk(id, {
            attributes: { exclude: ['passwordHash'] } // Não retornar senha
        });
        return user ? user.toJSON() : null;
    }

    return { create, findById, findByEmail }
}