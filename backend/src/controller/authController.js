const crypto = require("crypto");
const authService = require("../service/authService");

exports.register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    // const token = crypto.randomBytes(64).toString("hex");
    const user = await authService.register({
      username,
      email,
      password,
      role,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.verifyUser = async (req, res) => {
  try {
    const { token } = req.query;
    const user = await authService.verifyUser(token);

    if (!user) {
      return res.redirect(`${process.env.FRONTEND_URL}/?verified=false`);
    }

    return res.redirect(
      `${process.env.FRONTEND_URL}/?verified=true&email=${encodeURIComponent(user.email)}`,
    );
  } catch (err) {
    return res.redirect(`${process.env.FRONTEND_URL}/?verified=false`);
  }
};

exports.resendVerification = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const result = await authService.resendVerification(email);

    res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body; // ✅ correct

    const result = await authService.login({ email, password });

    res.status(200).json({
      success: true,
      message: "User login successfully",
      token: result.token,
      user: result.user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
