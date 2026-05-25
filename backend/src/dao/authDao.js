const { User } = require("../models");

exports.register = async (data) => {
  return await User.create(data);
};

// exports.verifyUser = async (token) => {
//   const user = await User.findOne({ where: { verification_token: token } }); 

//   if (!user) {
//     return null;
//   }

//   user.is_verified = true;
//   user.verification_token = null;
//   await user.save(); // Update the user record in the database

//   return user;
// };

exports.findByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};