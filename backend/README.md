# Mesto API 

## Описание
Backend часть проекта Mesto.

`/routes` — папка с файлами роутера  
`/controllers` — папка с файлами контроллеров пользователя и карточки   
`/models` — папка с файлами описания схем пользователя и карточки

Остальные директории вспомогательные, создаются при необходимости разработчиком

## Роуты

```
# Регистрация по email и password
POST /signup  
```
```
# Авторизация по email и password
POST /signin
``` 
```
# Возвращает всех пользователей
GET /users
```
```
# Возвращает пользователя по id
GET /users/:userId
```
```
# Возвращает информацию о текущем(авторизованном) пользователе
GET /users/me
```
```
# Обновляет информацию о текущем пользователе
PATCH /users/me
```
```
# Обновляет аватар текущего пользователя
PATCH /users/me/avatar
```
```
# Возвращает все карточки
GET /cards
```
```
# Создаёт новую карточку
POST /cards
```
```
# Удаляет карточку по id
DELETE /cards/:cardId
```
```
# Поставить/убрать лайк карточке
PUT/DELETE /cards/:cardId/likes
```

## Используемые технологии

В backend части используются:
- Node.js
- Express
- MongoDB + mongoose
- Helmet
- Шифрование bcrypt
- Winston
- Валидация Celebrate Joi

Весь код написан в едином стиле по стайлгайду — [Airbnb](https://github.com/airbnb/javascript "Airbnb")

### Инструкция по локальному развертыванию API
- Склонируйте репозиторий:
```
git clone https://github.com/dhoine345/react-mesto-api-full.git
```
- Перейдите в папку `backend`
- Установите зависимости:
```
npm i
```
- Запустите проект:
```
npm run start — запускает сервер   
npm run dev — запускает сервер с hot-reload
