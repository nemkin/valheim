FROM node:latest

WORKDIR /usr/src/bot

COPY . .
RUN npm install

ENV SERVER_PASS=SERVER_PASS_NOT_SET
ENV DISCORD_TOKEN=DISCORD_TOKEN_NOT_SET

RUN apt-get update && apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -

RUN echo "deb [arch=amd64] https://download.docker.com/linux/debian $(bash -c 'source /etc/os-release; echo $VERSION_CODENAME') stable" > /etc/apt/sources.list.d/docker.list

RUN apt-get update && apt-get install -y docker-ce-cli

RUN docker --version

CMD ["node", "bot.js"]

