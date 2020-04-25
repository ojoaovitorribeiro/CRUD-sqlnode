// const Address = require("../models/Address");
const User = require("../models/User");
const Tech = require("../models/Tech");

module.exports = {
  async store(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const [tech] = await Tech.findOrCreate({
      where: { name },
    });

    await user.addTech(tech); //O PROBLEMA É AQUI, ESSE COISA NÃO FUNCIONA

    return res.json(tech);
  },

  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: {
        association: "techs",
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    return res.json(user.techs);
  },
};
