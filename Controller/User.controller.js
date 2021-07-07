const UserModel = require("../Models/User.model");
const bcrypt = require("bcrypt");

module.exports = {
  create: async (req, res) => {
    const { username, password: plainTextPassword } = req.body;
    const password = await bcrypt.hashSync(plainTextPassword, 10);
    await UserModel.create({
      username,
      password,
    })
      .then((responce) => {
        if (responce) {
          return res.json({
            success: 1,
            message: "User Created Successfully",
            data: responce,
          });
        }
      })
      .catch((error) => {
        return res.json({
          success: 0,
          message: "failed",
          data: error,
        });
      });
  },
};
