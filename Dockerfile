# 1. Используем Node.js для сборки фронтенда
FROM node:18 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json и устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm install

# Копируем весь проект и собираем его
COPY . .
RUN npm run build

# 2. Используем Nginx для раздачи собранного React-приложения
FROM nginx:alpine

# Удаляем дефолтный конфиг Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Копируем наш кастомный конфиг
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем собранные файлы React в директорию Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Копируем SSL-сертификаты (если уже есть)
COPY certs /etc/letsencrypt

# Открываем порты 80 и 443
EXPOSE 80 443

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
