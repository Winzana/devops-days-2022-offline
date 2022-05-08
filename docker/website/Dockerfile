####################################
# Install dependencies
####################################
FROM node:16.15-alpine as node_install
RUN apk --no-cache add --virtual .builds-deps build-base python3

# Create and change to the app directory.
WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./yarn.lock
COPY ./decorate-angular-cli.js ./decorate-angular-cli.js
COPY ./workspace.json ./workspace.json
COPY ./nx.json ./nx.json
COPY ./tsconfig.base.json ./tsconfig.base.json
COPY ./babel.config.json ./babel.config.json

RUN yarn install

COPY ./apps ./apps
COPY ./libs ./libs
COPY ./tools ./tools

####################################
# website Dashboard
####################################
FROM node_install as node_build_website
ARG APP_ENV=production
ARG BUILD_BIN

RUN yarn nx build ${BUILD_BIN} --configuration=$APP_ENV --memoryLimit 6144 --outputPath ./dist

FROM nginx as website
ARG BUILD_BIN

COPY docker/website/default.conf /etc/nginx/conf.d/default.conf
COPY docker/website/nginx.conf /etc/nginx/nginx.conf
COPY --from=node_build_website /usr/src/app/dist /usr/share/nginx/html/
