# Using Node.js LTS version
FROM node:alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

EXPOSE 4200

CMD /usr/src/app/node_modules/.bin/ng serve --host 0.0.0.0 --disable-host-check
