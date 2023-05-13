FROM node:18-alpine

ENV PORT=3000

WORKDIR /opt/app

COPY ./package*.json .

RUN apk add --update npm && npm install && apk add curl

COPY . .

EXPOSE ${PORT}

HEALTHCHECK --interval=15s --timeout=5s --start-period=3s --retries=3 \
  CMD curl -f http://localhost:${PORT}/app || exit 1

CMD ["npm", "start"]