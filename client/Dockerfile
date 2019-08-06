FROM node:8.9.0-alpine

#Create app directory and use it as the working directory
RUN mkdir -p /srv/app/frontend-client
WORKDIR /srv/app/frontend-client

COPY package.json /srv/app/frontend-client
COPY package-lock.json /srv/app/frontend-client

RUN npm install

COPY . /srv/app/frontend-client
CMD ["npm", "run", "start"]
