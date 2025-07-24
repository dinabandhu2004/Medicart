// const User = require('../model/user');
const Doctorverify = require('../model/Doctorschema')
const jwt = require('jsonwebtoken');

// Register Controller
const registration = async (req, res) => {
  try {
    const { name, qualification, email, password } = req.body;

    if (!name || !qualification || !email || !password) {
      return res.status(400).json({ msg: 'All fields are required.', success: false });
    }

    const isUser = await Doctorverify.findOne({ email });
    if (isUser) {
      return res.status(400).json({ msg: 'User already exists.', success: false });
    }

    const newUser = new Doctorverify({ name, qualification, email, password });
    await newUser.save();

    return res.status(201).json({ msg: 'Registration successful.', success: true });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ msg: 'Something went wrong.', success: false });
  }
};

// Login Controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: 'Email and password are required.', success: false });
    }

    const user = await Doctorverify.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ msg: 'Invalid credentials.', success: false });
    }

    const token = jwt.sign(
      { email: user.email, name: user.name },
      process.env.SECRET_code,
      { expiresIn: '1h' }
    );

    return res.status(200).json({ msg: 'Login successful.', success: true, token });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ msg: 'Something went wrong.', success: false });
  }
};

// Home/Profile Controller (Protected Route)
const doctordashboard = async (req, res) => {
  try {
    const { email } = req.user;

    const user = await Doctorverify.findOne({ email }).select('-password');
    if (!user) {
      return res.status(404).json({ msg: 'User not found.', success: false });
    }

    return res.status(200).json({ msg: 'Profile fetched successfully.', data: user, success: true });
  } catch (error) {
    console.error('Home error:', error);
    return res.status(500).json({ msg: 'Something went wrong.', success: false });
  }
};

module.exports = { registration, login, doctordashboard };
