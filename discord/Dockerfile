FROM node:latest

WORKDIR /usr/src/bot

COPY . .
RUN npm install

ENV SERVER_PASS=SERVER_PASS_NOT_SET
ENV DISCORD_TOKEN=DISCORD_TOKEN_NOT_SET

CMD ["node", "bot.js"]

