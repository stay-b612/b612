# base image
FROM node:16-alpine

# set working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install -g npm@9.6.7

# Install Next.js globally
RUN npm install -g next

RUN npm install --save-exact --save-dev typescript @types/react @types/node

# copy source code
COPY . .

# build Next.js app
RUN npm run build

# expose port 3000
EXPOSE 3000

# start the app
CMD ["npm", "start"]
