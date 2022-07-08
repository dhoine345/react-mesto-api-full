export const apiConfig = {
  baseUrl: 'http://api.lue42.students.nomoredomains.sbs',
  headers: {
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json',
  }
};

export const successAuth = 'Вы успешно зарегистрировались!';
export const unSuccessAuth = 'Что-то пошло не так! Попробуйте еще раз.';
export const BASE_URL = 'http://api.lue42.students.nomoredomains.sbs';


