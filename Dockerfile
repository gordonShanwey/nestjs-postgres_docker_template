FROM node:18-alpine AS base

WORKDIR /user/src/app

COPY  package*.json ./

FROM base AS development

RUN --mount=type=cache,target=/user/src/app/.npm \
    npm set cache /user/src/app/.npm && \
    npm install

# Copy application files
COPY  . .

EXPOSE 3000

CMD ["npm", "run", "start:dev_and_migrate"]

FROM base AS production

ENV NODE_ENV production

RUN --mount=type=cache,target=/user/src/app/.npm \
    npm set cache /user/src/app/.npm && \
    npm ci --only=production

COPY ./dist/ ./dist

EXPOSE 3000

CMD ["npm", "run", "start:prod_migration"]