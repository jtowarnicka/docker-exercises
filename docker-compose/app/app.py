from flask import Flask, jsonify
from pymongo import MongoClient

app = Flask(__name__)

def get_db():
    client = MongoClient(host='database',
                         port=27017)
    db = client["users"]
    return db

@app.route("/")
def hello():
    return "Hello, go to /users to see all users!"

@app.route('/users')
def get_users():
    db = get_db()
    _users = db.users.find()
    users = [{ "name": user["name"], "last_name": user["last_name"]} for user in _users]
    return jsonify({"users": users})


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=3001)
