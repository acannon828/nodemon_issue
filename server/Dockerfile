FROM node:14.5-alpine
ENV NODE_ENV=development

WORKDIR /usr/src/server/

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . .
