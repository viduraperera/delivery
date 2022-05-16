FROM node:15.13-alpine
WORKDIR /delivery
ADD package*.json ./
RUN npm install
ADD . .
CMD ["npm", "start"]