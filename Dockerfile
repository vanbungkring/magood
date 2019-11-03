FROM node:9

WORKDIR /usr/app
COPY package*.json ./
RUN npm install pm2 -g
RUN npm install

COPY . .

RUN npm run build
COPY config/* ./dist

EXPOSE 3000
CMD ["PM2 startOrRestart","./dist/server.js"]