FROM node:18-alpine

WORKDIR /app

# Copiar package.json e instalar dependencias
COPY backend/package*.json ./
RUN npm install

# Copiar el resto del código
COPY backend .

# Generar el cliente Prisma DENTRO del contenedor con binarios para Linux
RUN npx prisma generate

# Compilar el backend
RUN npm run build

# Exponer puerto
EXPOSE 8000

# Ejecutar la app
CMD ["node", "dist/index.js"]
