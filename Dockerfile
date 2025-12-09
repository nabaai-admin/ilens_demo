# Stage 1: Build I Lens Yemen AI Demo React App
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies only when needed
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

# Copy source files
COPY . .

# Build project
RUN npm run build

# Stage 2: Production server
FROM nginx:alpine

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Set permissions
RUN chmod -R 755 /usr/share/nginx/html

ENV NODE_ENV=production
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
