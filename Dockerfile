FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm clean-install
COPY . .
RUN npm run build

FROM node:18-alpine AS dev
WORKDIR /app
RUN rm -rf ./*
COPY --from=build /app/package.json .
COPY --from=build /app/build .
CMD ["node", "index.js"]

# TODO prod
