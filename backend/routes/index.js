const { celebrate, Joi } = require('celebrate');
const { createUser, login } = require('../controllers/users');
const auth = require('../middlewares/auth');
const { regexUrl } = require('../utils/constants');
const NotFoundError = require('../utils/errors/NotFoundError');

app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}), login);
app.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(regexUrl),
  }),
}), createUser);

app.use(auth);

app.use('/users', require('./users'));
app.use('/cards', require('./cards'));

app.use(() => {
  throw new NotFoundError(errorMessages.pageNotFound);
});

module.exports = router;