FROM node:latest as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine as prod
COPY --from=build /app/dist/teiping /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
