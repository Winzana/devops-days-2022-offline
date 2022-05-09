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

FROM node_install as node_build

ARG BUILD_BIN

RUN NODE_ENV=production yarn build ${BUILD_BIN} --configuration production

####################################
# Copy build sources in new image
####################################
FROM node_build as node_dist

# Copy local code to the container image.
COPY --from=node_build --chown=node:node /usr/src/app/dist ./dist
