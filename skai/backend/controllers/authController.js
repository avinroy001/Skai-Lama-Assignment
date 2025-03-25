const authService = require("../services/authService");

const register = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  try {
    const response = await authService.registerUser(email, password, confirmPassword);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await authService.loginUser(email, password);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { register, login };
