# ============================================================
# Dockerfile — cloud-native-first-contribution
# Multi-stage: build the Vite client, then run Express on Alpine.
# ============================================================

# --- Stage 1: build React / Vite frontend ---
FROM node:20-alpine AS client-builder
WORKDIR /build
COPY client/package.json client/package-lock.json ./client/
RUN npm ci --prefix client
COPY client/ ./client/
RUN npm run build --prefix client

# --- Stage 2: production server ---
FROM node:18-alpine
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --omit=dev

COPY app ./app
COPY --from=client-builder /build/client/dist ./client/dist

EXPOSE 3000

CMD ["node", "app/server.js"]
