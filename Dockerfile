# Etapa 1: instalar dependencias y compilar
FROM node:18-alpine AS builder

WORKDIR /app 	

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build  # esto debe generar /dist

# Etapa 2: imagen liviana solo con lo necesario
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

EXPOSE 3000

CMD ["node", "dist/index.js"]

