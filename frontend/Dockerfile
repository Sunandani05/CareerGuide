# # Dockerfile for React client

# # Build react client
# FROM node:10.16-alpine

# # Working directory be app
# WORKDIR /usr/src/app

# COPY package*.json ./

# ###  Installing dependencies

# RUN npm install --silent

# # copy local files to app folder
# COPY . .


# CMD ["npm","start"]

FROM node:alpine
WORKDIR /frontend
COPY ./package*.json ./
RUN npm install
COPY . .
CMD [ "npm","start" ]