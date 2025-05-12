const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User, Role } = require("../../models");
const dotenv = require('dotenv');
const { where } = require("sequelize");

// create roles 
const createRoles = async (req, res) => {
  try {
    const body = req.body;
    const existingRole = await Role.findOne({ where: { name: body.name } });
    if (existingRole) {
      return res.json({
        success: false,
        message: "Role already exists",
      });
    }
    const role = await Role.create(body);
    res.status(200).json({
      success: true,
      message: "Role created successfully",
      data: role,
    });
  } catch (e) {
    console.log(e);
  }
};

//get roles
const getRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.status(200).json({
      success: true,
      data: roles,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
}

//register
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;
  console.log("🚀 ~ registerUser ~ userName, email, password:", userName, email, password)

  try {
    const checkUser = await User.findOne({ where: { email } });
    if (checkUser)
      return res.json({
        success: false,
        message: "User Already exists with the same email! Please try again",
      });

    const hashPassword = await bcrypt.hash(password, 12);

    const role = await Role.findOne({ where: { name: "User" } });

    const newUser = new User({
      userName,
      email,
      password: hashPassword,
      role_id: role.id,
    });

    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Registration successful",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

//login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkUser = await User.findOne({ 
      where: { email },
      include: [{ model: Role }]
     });
    if (!checkUser)
      return res.json({
        success: false,
        message: "User doesn't exist! Please register first",
      });

    const checkPasswordMatch = await bcrypt.compare(
      password,
      checkUser.password
    );
    if (!checkPasswordMatch)
      return res.json({
        success: false,
        message: "Incorrect password! Please try again",
      });

    const token = jwt.sign(
      {
        id: checkUser.id,
        role: checkUser.Role,
        email: checkUser.email,
        userName: checkUser.userName,
      },
      process.env.CLIENT_SECRET_KEY,
      { expiresIn: "60m" }
    );

    res.cookie("token", token, { httpOnly: true, secure: false }).json({
      success: true,
      message: "Logged in successfully",
      user: {
        email: checkUser.email,
        role: checkUser.role,
        id: checkUser.id,
        userName: checkUser.userName,
        token
      },
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

//logout

const logoutUser = (req, res) => {
  res.clearCookie("token").json({
    success: true,
    message: "Logged out successfully!",
  });
};

//auth middleware
const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({
      success: false,
      message: "Unauthorised user!",
    });

  try {
    const decoded = jwt.verify(token, "CLIENT_SECRET_KEY");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Unauthorised user!",
    });
  }
};

module.exports = { registerUser, loginUser, logoutUser, authMiddleware, createRoles, getRoles };
