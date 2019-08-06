FROM node:8.9.0-alpine

# Create app directory

RUN mkdir -p /srv/app/api-server
WORKDIR /srv/app/api-server

COPY package.json /srv/app/api-server
COPY package-lock.json /srv/app/api-server

RUN npm install

COPY . /srv/app/api-server

CMD ["npm", "run", "start"]
