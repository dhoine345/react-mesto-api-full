const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  createCard,
  getCards,
  deleteCard,
  setLike,
  removeLike,
} = require('../controllers/cards');
const { regexUrl } = require('../utils/constants');

router.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().pattern(regexUrl),
  }),
}), createCard);
router.get('/', getCards);
router.delete('/:cardId', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().length(24).hex(),
  }),
}), deleteCard);
router.put('/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().length(24).hex(),
  }),
}), setLike);
router.delete('/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().length(24).hex(),
  }),
}), removeLike);

module.exports = router;
