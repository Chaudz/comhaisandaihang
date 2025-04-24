# Development stage
FROM node:18-alpine AS development

WORKDIR /src

# Copy package files
COPY package*.json ./

# Install dependencies including devDependencies
RUN npm install
RUN npm install -D tailwindcss postcss autoprefixer

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start development server
CMD ["npm", "run", "dev"]

# Production stage
FROM node:18-alpine AS production

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm install
RUN npm install -D tailwindcss postcss autoprefixer

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Clean up devDependencies
RUN npm prune --production

# Expose port
EXPOSE 3000

# Start production server
CMD ["npm", "start"] 