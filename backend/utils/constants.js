const errorMessages = {
  cardError: 'Карточка не найдена',
  userError: 'Запрашиваемый пользователь не найден',
  commonError: { message: 'Произошла ошибка' },
  badRequest: 'Переданы некорректные данные',
  pageNotFound: 'Страница не найдена',
  incorrectEmail: 'Неправильный формат почты',
  server: 'На сервере произошла ошибка',
  emailError: 'Указанный email уже занят',
  forbidden: 'Действие запрещено',
  unauthorized: 'Необходима авторизация',
  emailOrPassword: 'Неправильные почта или пароль',
};
const resCodes = {
  OK: 200,
  CREATED_CODE: 201,
  NOT_FOUND_ERROR: 404,
  INTERNAL_SERVER_ERROR: 500,
  BAD_REQUEST: 400,
  CONFLICT: 409,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};

// eslint-disable-next-line no-useless-escape
const regexUrl = /https?:\/\/[www.]*[\w-]+\.[a-z]+[\/\w\S]*/;

module.exports = {
  errorMessages,
  resCodes,
  regexUrl,
};
