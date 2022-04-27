FROM node:18-alpine3.14

RUN mkdir /app
WORKDIR /app
# Install the dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit dev
# Copy the source files
COPY ./src ./src

# Start the server
EXPOSE ${SERVER_PORT}
CMD npm run start
