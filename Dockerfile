FROM node:12-alpine

WORKDIR /app

COPY package.json package-lock.json lerna.json /app/
COPY packages/api/package.json /app/packages/api/package.json
COPY packages/web/package.json /app/packages/web/package.json

RUN npm install

COPY . /app

RUN npm run bootstrap

CMD ["npm", "start"]