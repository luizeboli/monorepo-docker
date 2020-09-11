FROM node:12-alpine

WORKDIR /api

COPY package*.json /api/

RUN npm ci --only=production

COPY . /api/

EXPOSE 80
CMD [ "node", "index.js" ]

