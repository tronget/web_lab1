FROM node:alpine as build
LABEL authors="tronget"

WORKDIR /app

COPY frontend/src/ ./frontend/src
COPY nginx.conf ./nginx.conf
RUN npm install typescript
RUN tsc ./frontend/src/scripts

FROM nginx:stable-alpine
COPY --from=build app/frontend/src/ /usr/share/nginx/html
COPY --from=build app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]