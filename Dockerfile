# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy your application files into the container
COPY . .

# Install application dependencies
RUN npm install

# Expose the port on which your application will listen
EXPOSE 3000

# Define the command to start your Node.js application
CMD ["node", "app.js"]
