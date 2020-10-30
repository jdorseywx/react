#base image
FROM node:12.18-alpine

# tell node to run in development mode, i.e. install dev dependencies
ENV NODE_ENV=development

# Set the working directory.
WORKDIR /usr/src/app

# Copy the package files from your host to your current location.
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# Run the command inside your image filesystem.
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Add metadata to the image to describe which port the container is listening on at runtime.
EXPOSE 3000

# Run the specified command within the container.
CMD ["npm", "start"]