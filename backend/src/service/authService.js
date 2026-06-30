const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const userDao = require("../dao/authDao");
const emailService = require("../service/emailService");

exports.register = async (userdata) => {
  const hashedPassword = await bcrypt.hash(userdata.password, 10);
  userdata.password = hashedPassword;

  const token = crypto.randomBytes(32).toString("hex");
  const expiry = new Date(Date.now() + 24 * 60 * 60 * 1000); // 1 day from now

  const user = await userDao.register({
    ...userdata,
    password: hashedPassword,
    is_verified: false,
    verification_token: token,
    token_expiry: expiry,
  });

  await emailService.sendVerificationEmail(userdata.email, token);

  return user;
};

exports.verifyUser = async (token) => {
  return await userDao.verifyUser(token);
};

exports.login = async ({ email, password }) => {
  console.time("Login Execution Time");

  if (!password) {
    throw new Error("Password is required");
  }

  const user = await userDao.findByEmail(email);
  console.timeEnd("Login Execution Time");
  if (!user) {
    throw new Error("Invalid email or password");
  }

  if (!user.is_verified) {
    throw new Error("Please verify your email");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  return {
    token,
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  };
};
