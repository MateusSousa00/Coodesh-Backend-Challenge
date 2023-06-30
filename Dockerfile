FROM node:18-alpine

WORKDIR /src

COPY . .

RUN yarn && yarn build

EXPOSE 3000