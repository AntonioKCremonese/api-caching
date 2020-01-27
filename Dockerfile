FROM node:10-alpine

WORKDIR /usr/app
COPY package.json package-lock.json ./

RUN npm config set strict-ssl false
RUN npm i

COPY . .

EXPOSE 3000
CMD ["npm","run","start"]