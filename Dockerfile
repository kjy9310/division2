# base image
FROM node:12.16.1-alpine
#FROM alpine-node:12.16.1
# FROM buildpack-deps:stretch

# RUN groupadd --gid 1000 node \
#   && useradd --uid 1000 --gid node --shell /bin/bash --create-home node

# ENV NODE_VERSION 12.16.1
EXPOSE 3006

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
COPY tsconfig.json /app/tsconfig.json

# RUN npm install --save react react-dom react-scripts
RUN npm install
# RUN npm install -g react-scripts@3.0.1

#RUN npm install --save history  react-router react-router-dom react-spring \
#                       query-string nouislider react-big-calendar react-bootstrap-sweetalert moment perfect-scrollbar \
#                       react-bootstrap-switch react-bootstrap-wizard react-chartjs-2 chart.js react-datetime \
#                       react-google-maps react-jvectormap react-notification-alert react-select react-table react-tagsinput axios \
#                       @material-ui/core @material-ui/lab react-bingmaps react-copy-to-clipboard
# start app
CMD ["npm", "start"]

