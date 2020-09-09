FROM node:12-alpine

WORKDIR /api

COPY package.json /api/package.json
RUN npm install

COPY . .

CMD ["npm", "start"]