import { User } from '../../models/index.js';

export function makeUserRepoSequelize() {
return {
async create({ name, email, passwordHash }) {
const user = await User.create({ name, email, passwordHash });
return user.toJSON();
},


async findByEmail(email) {
const user = await User.findOne({ where: { email } });
return user ? user.toJSON() : null;
},


async findById(id) {
const user = await User.findByPk(id, {
attributes: { exclude: ['passwordHash'] } // Não retornar senha
});
return user ? user.toJSON() : null;},


async list({ page = 1, limit = 10 }) {
const offset = (page - 1) * limit;


const { count, rows } = await User.findAndCountAll({
attributes: { exclude: ['passwordHash'] },
limit,
offset,
order: [['createdAt', 'DESC']]
});


return {
items: rows.map(u => u.toJSON()),
page,
limit,
total: count,
totalPages: Math.ceil(count / limit)
};
},


async update(id, data) {
const user = await User.findByPk(id);
if (!user) return null;
await user.update(data);
return user.toJSON();
},


async delete(id) {
const user = await User.findByPk(id);
if (!user) return false;


await user.destroy();
return true;
}
};
}