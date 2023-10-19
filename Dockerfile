# syntax = docker/dockerfile:1
ARG NODE_VERSION=lts
FROM node:${NODE_VERSION} as base

ARG PORT=3000
ENV NODE_ENV=production

WORKDIR /app

# Build
FROM base as build

COPY --link package.json package-lock.json .
RUN npm install --production=false

COPY --link . .

RUN npm run build
RUN npm prune

# Run
FROM base as run
ENV PORT=$PORT

COPY --from=build /app/.output /app/.output
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /app/node_modules /app/node_modules

CMD [ "node", ".output/server/index.mjs" ]
