FROM node:14.18.1
ARG TEST=VAR

RUN mkdir /app
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY .npmrc ./
COPY . ./
RUN npm install
RUN npm run build

EXPOSE 5000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=5000

CMD npm run start
