FROM node:18
WORKDIR /usr/src/clean-node-api
COPY package.json .
RUN yarn install --production