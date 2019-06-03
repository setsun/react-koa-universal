FROM node:12.3.1-alpine

WORKDIR /client

ENV NODE_ENV = production
ENV PORT = 8800

COPY package.json ./
COPY yarn.lock ./

# install yarn and dependencies
RUN apk --no-cache add curl
RUN curl -o- -L https://yarnpkg.com/install.sh | \ bash -s -- --version 1.16.0
RUN yarn install

# bundle app
RUN yarn build
COPY dist .

EXPOSE 8800

# start app
CMD ["yarn", "start"]
