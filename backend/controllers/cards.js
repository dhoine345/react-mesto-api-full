const Card = require('../models/card');
const { handleErrors, handleRequest } = require('../utils/utils');
const { resCodes, errorMessages } = require('../utils/constants');
const ForbiddenError = require('../utils/errors/ForbiddenError');
const NotFoundError = require('../utils/errors/NotFoundError');

const createCard = (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;

  Card.create({ name, link, owner })
    .then((card) => res.status(resCodes.CREATED_CODE).send({ data: card }))
    .catch((err) => handleErrors(err, next));
};

const getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(next);
};

const deleteCard = (req, res, next) => {
  Card.findById(req.params.cardId)
    .then((card) => {
      if (!card) {
        throw new NotFoundError(errorMessages.cardError);
      } else if (req.user._id.toString() !== card.owner.toString()) {
        throw new ForbiddenError(errorMessages.forbidden);
      }
      return card.remove();
    })
    .then((card) => res.status(resCodes.OK).send({ data: card }))
    .catch((err) => handleErrors(err, next));
};

const setLike = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => handleRequest(card, res, errorMessages.cardError))
    .catch((err) => handleErrors(err, next));
};

const removeLike = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => handleRequest(card, res, errorMessages.cardError))
    .catch((err) => handleErrors(err, next));
};

module.exports = {
  createCard,
  getCards,
  deleteCard,
  setLike,
  removeLike,
};
