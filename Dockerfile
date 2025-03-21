# 1. Используем Node.js для сборки приложения
FROM node:18 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы и собираем проект
COPY . .
RUN npm run build

# 2. Используем простой сервер для отдачи статики
# Выбираем Nginx или любой другой сервер для статики, например, Serve (или любой другой HTTP сервер)
FROM node:18-alpine

# Устанавливаем сервер Serve для раздачи статики
RUN npm install -g serve

# Указываем рабочую директорию
WORKDIR /app

# Копируем собранные файлы из предыдущего этапа
COPY --from=build /app/build /app

# Открываем порт
EXPOSE 9002

# Запускаем сервер для раздачи статики
CMD ["serve", "-s", "build", "-l", "9002"]
