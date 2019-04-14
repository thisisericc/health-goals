from flask import Flask
from flask import jsonify
from flask import make_response
from flask import request
import json

from HealthGoals import database

app = Flask(__name__)

@app.route('/api/videos', methods=["GET"])
def get_videos():
    return jsonify(database.get_videos())

@app.route('/api/videos/<video>', methods=["GET"])
def find_videos(video):
    try:
        if video is None:
            raise ValueError("video is not specified.")
        videofinal = database.find_videos(video)
        if videofinal is None:
            return make_response("No video with the given name.", 400)
        return jsonify(videofinal)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/trainingtype/<training>", methods=["GET"]) 
def filter_by_Training(training):
    try:
        if training is None:
            raise ValueError("type is not specified.")
        trainingtype = database.filter_by_Training(training)
        if trainingtype is None:
            return make_response("No type found with the given training.", 400)
        return jsonify(trainingtype)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
    
@app.route("/api/difficulty/<difficulty>", methods=["GET"])
def filter_by_difficulty(difficulty):
    try:
        if difficulty is None:
            raise ValueError("difficulty is not specified.")
        difficultynum = database.filter_by_difficulty(difficulty)
        if difficultynum is None:
            return make_response("No type found with the given difficulty.", 400)
        return jsonify(difficultynum)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/bodyfocus/<focus>", methods=["GET"])
def filter_by_bodyfocus(focus):
    try:
        if focus is None:
            raise ValueError("focus is not specified.")
        bodyfocus = database.filter_by_bodyfocus(focus)
        if bodyfocus is None:
            return make_response("No type found with the given focus.", 400)
        return jsonify(bodyfocus)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

'''
@app.route("/api/combine/<training>/<difficulty>", methods=["GET"])
def filter_td(training,difficulty):
    return jsonify(database.filter_td(training,difficulty))

@app.route("/api/combine/<training>/<focus>", methods=["GET"])
def filter_tf(training,focus):
    return jsonify(database.filter_tf(training,focus))

@app.route("/api/combine/<difficulty>/<focus>", methods=["GET"])
def filter_df(difficulty,focus):
    return jsonify(database.filter_df(difficulty,focus))

@app.route("/api/combine/<training>/<difficulty>/<focus>", methods=["GET"])
def filter_combine(training,difficulty,focus):
    try:
        if training is None:
            return jsonify(database.filter_df(difficulty,focus))

        if difficulty is None:
            return jsonify(database.filter_tf(training,focus))

        if focus is None:
            return jsonify(database.filter_td(training,difficulty))

        if difficulty and focus is None:
            return jsonify(database.filter_by_Training(training))

        if training and focus is None:
            return jsonify(database.filter_by_difficulty(difficulty))

        if difficulty and training is None:
            return jsonify(database.filter_by_bodyfocus(focus))

        if training and difficulty and focus is None:
            return make_response(" Please select filter options.", 400)
        
        return jsonify(database.filter_combine(training,difficulty,focus))
    except Exception as e:
        return make_response(str(e),500)        
'''
@app.route("/api/SearchVideos/<name>", methods=["GET"])
def search_videos(name):
    try:
        if name is None:
            raise ValueError("focus is not specified.")
        video = database.search_videos(name)
        if video is None:
            return make_response("No video with the given name.", 400)
        return jsonify(video)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

"""
@app.route("/api/videolink/<link>", methods=["GET"])
def video_link(link):
    try:
        if link is None:
            raise ValueError("name is not specified.")
        video = database.video_link(link)
        if video is None:
            return make_response("No video with the given name.", 400)
        return jsonify(video)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
"""