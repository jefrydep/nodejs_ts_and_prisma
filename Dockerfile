FROM node:19-alpine AS builder
# WORKDIR /usr/app
COPY ./package*.json ./
RUN rm -rf ./node_modules
RUN npm cache clean --force
RUN npm install
COPY ./ .
RUN npx prisma generate
# ENV NODE_ENV=production
# CMD ["npm","run","start"] 