const UserModel = require("../Models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwt_secret = process.env.JWT_SECRET;

module.exports = {
  signUp: async (req, res) => {
    const { username, password: plainTextPassword } = req.body;

    !username ? res.json({ success: 0, message: "Invalid UserName" }) : null;

    !plainTextPassword
      ? res.json({ success: 0, message: "Invalid password" })
      : null;

    plainTextPassword.length <= 5
      ? res.json({
          success: 0,
          message: "Password lenght should be greater than 5",
        })
      : null;
    const password = await bcrypt.hash(plainTextPassword, 10);
    await UserModel.create({
      username,
      password,
    })
      .then((responce) => {
        return res.json({
          success: 1,
          message: "User Created Successfully",
          data: responce,
        });
      })
      .catch((error) => {
        if (error === 11000) {
          return res.json({
            success: 0,
            message: "User Name Already Exists",
          });
        } else {
          return res.json({
            success: 0,
            message: "failed",
            data: error,
          });
        }
      });
  },
  signIn: async (req, res) => {
    const { username, password: plainTextPassword } = req.body;

    !username ? res.json({ success: 0, message: "Invalid UserName" }) : null;

    const user = await UserModel.findOne({ username }).lean();
    // Check User Exists or not
    if (!user) {
      return res.json({ success: 0, message: "UserName not exist" });
    } else {
      if (await bcrypt.compare(plainTextPassword, user.password)) {
        const token = jwt.sign(
          {
            _id: user._id,
            username: user.username,
          },
          jwt_secret
        );
        return res.json({
          success: 1,
          message: "login successfully",
          data: token,
        });
      } else {
        return res.json({ success: 0, message: "Password not match" });
      }
    }
  },
  updatePassword: async (req, res) => {
    const { token, password: plainTextPassword } = req.body;

    !token ? res.json({ status: 0, message: "Token required" }) : null;

    !plainTextPassword
      ? res.json({ status: 0, message: "Invalid Password" })
      : null;

    try {
      const user = jwt.verify(token, jwt_secret);

      const _id = user._id;
      console.log(user, "This is the check");
      const newpassword = await bcrypt.hash(plainTextPassword, 10);
      await UserModel.updateOne(
        { _id },
        {
          $set: { password: newpassword },
        }
      )
        .then((responce) => {
          return res.json({
            status: 1,
            message: "update successfully",
            data: responce,
          });
        })
        .catch((error) => {
          return res.json({
            status: 0,
            message: "Failed",
            data: error,
          });
        });
    } catch (error) {
      return res.json({
        status: 0,
        message: "Token Invalid",
      });
    }
  },
};
