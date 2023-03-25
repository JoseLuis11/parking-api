FROM node:18.14.2

WORKDIR /parking-api

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm cache clean --force
RUN npm install

COPY . .

RUN npx tsc

EXPOSE 4000

CMD ["node", "./build"]
