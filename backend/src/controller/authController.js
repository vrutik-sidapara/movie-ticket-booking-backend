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
      // verification_token: token,
    });

    // 🔥 Send email here (nodemailer later)
    // console.log(
    //   `Verify link: http://localhost:3000/api/auth/verify?token=${token}`,
    // );

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
      // token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// exports.verifyUser = async (req, res) => {
//   try {
//     const { token } = req.query;

//     const user = await authService.verifyUser(token);

//     if (!user) {
//       return res.status(400).json({
//         message: "Invalid token",
//       });
//     }

//     res.json({
//       success: true,
//       message: "User verified successfully",
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

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
