# Используем официальный Node.js образ для сборки React-приложения
FROM node:16 AS build

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json в контейнер
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install --verbose

# Копируем все исходные файлы приложения
COPY . .

# Собираем проект
RUN npm run build && ls -la /usr/src/app

# Используем официальный образ Nginx для финального контейнера
FROM nginx:alpine

# Копируем скомпилированные файлы из предыдущего этапа сборки в директорию Nginx
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Копируем ваш конфиг Nginx в контейнер
COPY nginx.conf /etc/nginx/nginx.conf

# Экспонируем 80 порт
EXPOSE 80

# Запускаем Nginx в контейнере
CMD ["nginx", "-g", "daemon off;"]
