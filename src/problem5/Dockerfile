from node:20-alpine

# Set working directory
WORKDIR /app
# Copy package files
COPY package*.json ./
# Install dependencies
npm install
# Copy application files
COPY . .

# Expose application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
