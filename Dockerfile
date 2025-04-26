# Use Node.js 20 LTS
FROM node:20

# Create app directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the port react-router serve runs on
EXPOSE 3000

# Default command
CMD ["npm", "start"]
