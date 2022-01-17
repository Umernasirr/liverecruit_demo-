import User from "../models/User";
import ErrorResponse from "../utils/errorResponse";
import asynchandler from "../middleware/async";

// @desc Gett all users
//@route GET /api/v1/auth/users

export const getUsers = asynchandler(async (req: any, res: any, next: any) => {
  User.find({}, function (err: any, users: any) {
    console.log(users);
    res.status(200).json({ success: true, data: users });
  });
});

// @desc Gett single user
//@route GET /api/v1/auth/users/:id

export const getUser = asynchandler(async (req: any, res: any, next: any) => {
  const user = await User.findById(req.params.id);
  res.status(200).json({ success: true, data: user });
});

// @desc Create user
//@route POST /api/v1/auth/users

export const createUser = asynchandler(
  async (req: any, res: any, next: any) => {
    const user = await User.create(req.body);
    res.status(201).json({ success: true, data: user });
  }
);

// @desc Update  user
//@route GET /api/v1/auth/users/:id
// @access Private/Admin
export const updateUser = asynchandler(
  async (req: any, res: any, next: any) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ success: true, data: user });
  }
);

// @desc Delete user
//@route DELETE /api/v1/auth/users/:id
// @access Private/Admin
export const deleteUser = asynchandler(
  async (req: any, res: any, next: any) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: {} });
  }
);
