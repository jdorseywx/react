FROM node:12.18-alpine
ENV NODE_ENV=production
# tell app to listen on 8080 instead of default 3000
ENV PORT=8080
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent
COPY . .
EXPOSE 8080
CMD ["npm", "start"]
