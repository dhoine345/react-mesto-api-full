const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { handleErrors, handleRequest } = require('../utils/utils');
const { resCodes, errorMessages } = require('../utils/constants');
const BadRequestError = require('../utils/errors/NotFoundError');
const ConflictError = require('../utils/errors/ConflictError');

const { NODE_ENV, JWT_SECRET } = process.env;

const createUser = (req, res, next) => {
  const {
    name, about, avatar, email, password,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name, about, avatar, email, password: hash,
    }))
    .then((user) => res.status(resCodes.CREATED_CODE).send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(errorMessages.badRequest));
      } else if (err.code === 11000) {
        next(new ConflictError(errorMessages.emailError));
      } else {
        next(err);
      }
    });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', { expiresIn: '7d' });
      res.send({ token });
    })
    .catch((err) => handleErrors(err, next));
};

const getCurrentUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => handleRequest(user, res, errorMessages.userError))
    .catch((err) => handleErrors(err, next));
};

const getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch(next);
};

const getUserById = (req, res, next) => {
  User.findById(req.params.userId)
    .then((user) => handleRequest(user, res, errorMessages.userError))
    .catch((err) => handleErrors(err, next));
};

const updateProfile = (req, res, next) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(req.user._id, { name, about }, {
    new: true,
    runValidators: true,
  })
    .then((user) => handleRequest(user, res, errorMessages.userError))
    .catch((err) => handleErrors(err, next));
};

const updateAvatar = (req, res, next) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(req.user._id, { avatar }, {
    new: true,
    runValidators: true,
  })
    .then((user) => handleRequest(user, res, errorMessages.userError))
    .catch((err) => handleErrors(err, next));
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateProfile,
  updateAvatar,
  login,
  getCurrentUser,
};
