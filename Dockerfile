# Используем официальный образ Node.js
FROM node:18-alpine AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (если он существует)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Строим проект (если необходимо)
RUN npm run build

# Используем другой образ для запуска приложения
FROM node:18-alpine AS production

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем все необходимые файлы из предыдущего образа
COPY --from=build /app /app

# Устанавливаем глобальный сервер
RUN npm install -g serve

# Открываем порт
EXPOSE 5000

# Запускаем сервер
CMD ["serve", "-s", "build"]
