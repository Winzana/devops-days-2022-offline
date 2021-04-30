FROM node:13-alpine as node_build
# Create and change to the app directory.
WORKDIR /usr/src/app
RUN apk add --update --no-cache git
COPY package*.json ./

RUN npm install

COPY ./src ./src
COPY ./public ./public
COPY ./.eslintignore ./.eslintignore
COPY ./.eslintrc.js ./.eslintrc.js
COPY ./.prettierrc.js ./.prettierrc.js
COPY ./tsconfig.json ./tsconfig.json

####################################
# Dashboard
####################################
FROM node_build as node_build_website

ENV NODE_ENV=production
RUN npm run build

FROM nginx as website
COPY docker/website/default.conf /etc/nginx/conf.d/default.conf
COPY docker/website/nginx.conf /etc/nginx/nginx.conf
COPY --from=node_build_website /usr/src/app/build/ /usr/share/nginx/html/
