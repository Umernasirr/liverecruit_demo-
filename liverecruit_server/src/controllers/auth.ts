import User from "../models/User";
import ErrorResponse from "../utils/errorResponse";
import asynchandler from "../middleware/async";

//@desc Register user
//@route POST /api/v1/auth/register
// @access Public
const register = asynchandler(async (req: any, res: any) => {
  console.log(req.body);
  const { email, password, role } = req.body;
  //Create user
  const user = await User.create({
    email,
    password,
    role,
  });

  sendTokenResponse(user, 200, res);
});

// @desc Login user
//@route POST /api/v1/auth/login
// @access Public
const login = asynchandler(async (req: any, res: any, next: any) => {
  const { email, password } = req.body;

  //Validate email & password
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  //Check for user
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  // Check if password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  sendTokenResponse(user, 200, res);
});

// @desc Log user out/ clear cookie
//@route GET /api/v1/auth/logout
// @access Private
const logout = asynchandler(async (req: any, res: any) => {
  res.cookie("token", "none", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc Get current logged in user
//@route POST /api/v1/auth/me
// @access Private
const getMe = asynchandler(async (req: any, res: any) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user: any, statusCode: number, res: any) => {
  console.log(user);

  //Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(Date.now() + 360 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, token, user });
};

export { login, register, logout, getMe };
