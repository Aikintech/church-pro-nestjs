FROM node:18-alpine as dependencies

WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
RUN npm ci

COPY . .

# RUN npx prisma generate
# RUN npx prisma migrate deploy
RUN npm run build

FROM node:18-alpine as deploy

COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=dependencies /app/package*.json ./
COPY --from=dependencies /app/dist ./dist
COPY --from=dependencies /app/prisma ./prisma

EXPOSE 3000

CMD [ "npm", "run", "start:migrate:prod" ]