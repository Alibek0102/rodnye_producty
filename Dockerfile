FROM node:23.9.0
WORKDIR /rodnye_producty
COPY package.json /rodnye_producty
RUN npm install
COPY . /rodnye_producty

EXPOSE 3000