FROM python:alpine3.8

WORKDIR /app

COPY ./app/requirements.txt .

RUN pip install -r requirements.txt

COPY ./app .

ENV PORT 3001

EXPOSE 3003

ENTRYPOINT [ "python" ]

CMD [ "app.py" ]