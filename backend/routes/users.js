const router = require('express').Router();
const {
  createUser,
  getUsers,
  getUserById,
  updateProfile,
  updateAvatar,
  getCurrentUser,
} = require('../controllers/users');
const { validateGetUserById, validateUpdateProfile, validateUpdateAvatar } = require('../utils/validations');

router.post('/', createUser);
router.get('/', getUsers);
router.get('/me', getCurrentUser);
router.get('/:userId', validateGetUserById, getUserById);
router.patch('/me', validateUpdateProfile, updateProfile);
router.patch('/me/avatar', validateUpdateAvatar, updateAvatar);

module.exports = router;
