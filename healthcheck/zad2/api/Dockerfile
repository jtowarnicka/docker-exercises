FROM arm64v8/node

ENV PORT=3000

WORKDIR /app

COPY package.json .

RUN npm install --production

COPY index.js .

EXPOSE ${PORT}

CMD [ "node", "index.js" ]
