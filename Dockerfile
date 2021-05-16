FROM node:16-alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY ./app/package*.json ./
RUN npm install --silent

COPY ./app .

CMD ["npm", "start"]
EXPOSE 3000
