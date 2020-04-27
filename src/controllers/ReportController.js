const { Op } = require("sequelize");
const User = require("../models/User");

module.exports = {
  async show(req, res) {
    const users = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.iLike]: "%@email.com.br",
        },
      },
      include: [
        {
          association: "addresses",
          where: {
            street: "Rua Ivinhema",
          },
        },
        {
          association: "techs",
          required: false,
          where: {
            name: {
              [Op.iLike]: "teste%",
            },
          },
        },
      ],
    });

    return res.json(users);
  },
};
