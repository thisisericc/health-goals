from flask import Flask
from flask import jsonify
from flask import make_response
from flask import request
import json

from HEALTHGOALS import database

app = Flask(__name__)

@app.route('/api/groups', methods=["GET"])
def get_GroupInfo(): 
    return jsonify(database.get_GroupInfo())

@app.route('/api/group/<groupname>', methods=["GET"])
def getGroup(groupname): 
    return jsonify(database.getGroup(groupname))

@app.route('/api/searchForGroups/<name>', methods=["GET"])
def searchForGroups(name): 
    return jsonify(database.searchForGroups(name))

@app.route('/api/filterexercise/<exercise>', methods=["GET"])
def filterexercise(exercise): 
    return jsonify(database.filterexercise(exercise))

@app.route('/api/filtercalories/<calories>', methods=["GET"])
def filtercalories(calories): 
    return jsonify(database.filtercalories(calories))

@app.route('/api/members/<Name>', methods=["GET"])
def getMemberInfo(Name): 
    return jsonify(database.getMemberInfo(Name))

@app.route('/api/joingroup/<groupname>/<username>', methods=["GET"])
def JoinGroup(groupname, username): 
    return jsonify(database.JoinGroup(groupname, username))




