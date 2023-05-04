FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV USERS_API  http://localhost:3001

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]