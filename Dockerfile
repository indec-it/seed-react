FROM node:18

WORKDIR /app/

COPY dist/ /app/.

RUN mkdir logs

RUN npm init -y && npm i dotenv express node-fetch winston

EXPOSE 8080

CMD ["node", "server.js"]
