FROM node:12-alpine

WORKDIR /api

COPY packages/api/package*.json /api/

RUN npm ci --only=production

COPY packages/api /api/

EXPOSE 80
CMD [ "node", "index.js" ]

