from flask import Flask
from flask import jsonify
from flask import make_response
from flask import request
import json
from HealthGoals import database

app = Flask(__name__) 

@app.route('/api/MentalHealthForums', methods=["GET"])
def get_forums():
    return jsonify(database.get_forums())

@app.route('/api/MentalHealthLatestForums', methods=["GET"])
def get_latest_forums():
    return jsonify(database.get_latest_forums())

@app.route('/api/MentalHealthForums/<name>', methods=["GET"])
def find_forum(name):
    try:
        if name is None:
            raise ValueError("Forum is not specified.")
        forum = database.find_forum(name)
        if forum is None:
            return make_response("No forum found with the given name.", 404)
        return jsonify(forum)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/FilterForumByTopic/<topic>', methods=["GET"])
def filter_by_topic(topic):
    try:
        if topic is None:
            raise ValueError("Topic is not specified.")
        forum = database.filter_by_topic(topic)
        if forum is None:
            return make_response("No forum found with the given topic.", 404)
        return jsonify(forum)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/SearchForForum/<name>', methods=["GET"])
def search_forums(name):
    try:
        if name is None:
            raise ValueError("Name is not specified.")
        forum = database.search_forums(name)
        if forum is None:
            return make_response("No forum found with the given name.", 404)
        return jsonify(forum)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
    
@app.route('/api/PostForum/<name>/<description>/<topic>', methods=["GET"])
def post_forum(name, description, topic):
    return jsonify(database.post_forum(name, description, topic))

@app.route('/api/CountForums', methods=["GET"])
def count_num_forums():
    return jsonify(database.count_num_forums())

@app.route('/api/login/<email>/<password>', methods=["GET"])
def get_login(email, password):
    try:
        res = database.get_login(email, password)
        if res is None:
            raise ValueError("Incorrect username or password, please try again")
        return jsonify(res)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/getid/<email>/<password>', methods=["GET"])
def getid(email, password):
    try:
        res = database.getid(email, password)
        if res is None:
            raise ValueError("Incorrect username or password, please try again")
        return jsonify(res)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/signup/<FirstName>/<LastName>/<Email>/<Password>/<Description>/<Goals>/<DietaryRestrictions>/<Picture>', methods=["GET"])
def sign_up(FirstName,LastName, Email, Password, Description, Goals, DietaryRestrictions, Picture):
    try:
        res = database.sign_up(FirstName,LastName, Email, Password, Description, Goals, DietaryRestrictions, Picture)
        return jsonify(res)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
