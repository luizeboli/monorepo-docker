FROM node:12-alpine

WORKDIR /api

COPY package*.json /api/

RUN npm ci --only=production

COPY . .

EXPOSE 80
CMD [ "node", "index.js" ]

