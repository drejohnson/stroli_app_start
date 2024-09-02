# Use the official Bun image as the base image
FROM oven/bun:1 as base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package.json and lockfile
COPY package.json bun.lockb* ./
RUN bun install

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the @tanstack start application
RUN bun run build

# Production image, copy all the files and run the app
FROM oven/bun:1-slim AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 appuser

# Copy public folder
COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .output
RUN chown appuser:nodejs .output

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=appuser:nodejs /app/.output ./.output

USER appuser

EXPOSE 3000

ENV PORT 3000

# server.js is created by the build process from the standalone output
CMD ["node", ".output/server/index.mjs"]