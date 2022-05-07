####################################
# Install dependencies
####################################
FROM node:16.15-alpine as node_install
RUN apk --no-cache add --virtual .builds-deps build-base python3

# Create and change to the app directory.
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --network-timeout=3000000

COPY ./apps ./apps
COPY ./libs ./libs
COPY ./tools ./tools
COPY ./workspace.json ./workspace.json
COPY ./nx.json ./nx.json
COPY ./tsconfig.base.json ./tsconfig.base.json
COPY ./babel.config.json ./babel.config.json

####################################
# webapp Dashboard
####################################
FROM node_install as node_build_webapp
ARG APP_ENV=production
ARG BUILD_BIN

RUN npm run nx build ${BUILD_BIN} --configuration=$APP_ENV --memoryLimit 6144 --outputPath ./dist

FROM nginx as webapp
ARG BUILD_BIN

COPY docker/webapp/default.conf /etc/nginx/conf.d/default.conf
COPY docker/webapp/nginx.conf /etc/nginx/nginx.conf
COPY --from=node_build_webapp /usr/src/app/dist/apps/${BUILD_BIN} /usr/share/nginx/html/
