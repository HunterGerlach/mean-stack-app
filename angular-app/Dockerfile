# Stage 1: Build the Angular application
FROM registry.access.redhat.com/ubi8/nodejs-18:1-71.1695741533 as build

# Set ownership to the user that will run npm install
USER root

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json /app/

# Install dependencies in the container
RUN npm install

# Copy the rest of the application code to the working directory
COPY . /app

# Build the application for production
# The build artifacts will be stored in the dist/ directory
# Note: there is an extra -- which allows passing of args
RUN npm run build -- --configuration production

# Stage 2: Serve the application with Nginx

# Use the official Nginx image for the serve stage
FROM registry.access.redhat.com/ubi8/nginx-122

# Copy the build artifacts from the build stage to the Nginx server
COPY --from=build /app/dist/angular-app/browser /usr/share/nginx/html

# Copy the Nginx configuration file
# This file configures Nginx to serve the application and can be customized as needed
COPY ./nginx.conf /etc/nginx/nginx.conf

# Expose port 8080
# This is the port that Nginx will listen on
EXPOSE 8080

USER 1001

# When the container starts, Nginx will start and serve the application
CMD ["nginx", "-g", "daemon off;"]
