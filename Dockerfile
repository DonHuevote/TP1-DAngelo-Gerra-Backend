
FROM node:18-alpine AS deps

WORKDIR /app

COPY package*.json ./

RUN npm install

FROM node:18-alpine

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN npx ts-node --version

EXPOSE 3000

CMD ["npx", "ts-node", "index.ts", "-d"]

