const router = require('express').Router();
const {
  createCard,
  getCards,
  deleteCard,
  setLike,
  removeLike,
} = require('../controllers/cards');
const {
  validateCreateCard, validateDeleteCard, validateSetLike, validateRemoveLike,
} = require('../utils/validations');

router.post('/', validateCreateCard, createCard);
router.get('/', getCards);
router.delete('/:cardId', validateDeleteCard, deleteCard);
router.put('/:cardId/likes', validateSetLike, setLike);
router.delete('/:cardId/likes', validateRemoveLike, removeLike);

module.exports = router;
