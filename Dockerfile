ARG NODE_TAG="14.15.5-alpine3.10"

# Stage 1 - Build
FROM node:${NODE_TAG} as build
WORKDIR /usr/src/app
ENV NODE_ENV="development"
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

## Stage 2 - Dependencies
FROM node:${NODE_TAG} as prodDeps
WORKDIR /usr/src/deps
ENV NODE_ENV="production"
COPY package*.json ./
RUN npm ci --only=production

## Stage 4 - Release
FROM node:${NODE_TAG} as api
ENV NODE_ENV="production"
USER node
WORKDIR /usr/src/app
COPY --chown=node:node --from=prodDeps /usr/src/deps/node_modules /usr/src/app/node_modules
COPY --chown=node:node --from=build /usr/src/app/build /usr/src/app/build

EXPOSE $port

HEALTHCHECK --interval=1m --timeout=3s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:${PORT}/health || exit 1

CMD ["node", "build/server.js"]