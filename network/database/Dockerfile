FROM mongo

COPY staff.json /staff.json

CMD mongoimport --db test --collection workers --type json --file /staff.json --jsonArray

EXPOSE 27017