const { User } = require("../models");
const { Op } = require("sequelize");

exports.register = async (data) => {
  return await User.create(data);
};

exports.verifyUser = async (token) => {
  const user = await User.findOne({
    where: {
      verification_token: token,
      token_expiry: { [Op.gt]: new Date() },
    },
  });

  if (!user) {
    return null;
  }

  user.is_verified = true;
  user.verification_token = null;
  user.token_expiry = null;
  await user.save();

  return user;
};

exports.findByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};
