FROM node:12-alpine

WORKDIR /web

COPY package.json /web/package.json
RUN npm install

COPY . .

CMD ["npm", "start"]