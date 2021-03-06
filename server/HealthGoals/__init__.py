from flask import Flask
from flask import jsonify
from flask import make_response
from flask import request
import json
from HealthGoals import database

app = Flask(__name__)

@app.route('/api/SaveVideo/<videoname>/<userid>', methods=["GET"])
def saved_videos(videoname,userid):
    return jsonify(database.saved_videos(videoname,userid))

@app.route('/api/savedvideos/<userid>', methods=["GET"])
def get_saved_videos(userid):
    return jsonify(database.get_saved_videos(userid))

@app.route('/api/videos', methods=["GET"])
def get_videos():
    return jsonify(database.get_videos())

@app.route('/api/instructors', methods=["GET"])
def get_Instructors():
    return jsonify(database.get_Instructors())

@app.route('/api/instructors/<Name>', methods=["GET"])
def find_Instructor(Name):
    try:
        if Name is None:
            raise ValueError("name is not specified.")
        instructorfinal = database.find_Instructor(Name)
        if instructorfinal is None:
            return make_response("No instructor with the given name.", 400)
        return jsonify(instructorfinal)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

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
    
@app.route('/api/PostForum/<email>/<name>/<description>/<topic>', methods=["GET"])
def post_forum(email, name, description, topic):
    return jsonify(database.post_forum(email, name, description, topic))

@app.route('/api/CountForums', methods=["GET"])
def count_num_forums():
    return jsonify(database.count_num_forums())

@app.route('/api/ForumReplies/<name>', methods=["GET"])
def get_replies(name):
    try:
        if name is None:
            raise ValueError("Forum is not specified.")
        forum = database.get_replies(name)
        if forum is None:
            return make_response("No replies found with the given name.", 404)
        return jsonify(forum)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/articles', methods=["GET"])
def get_articles():
    return jsonify(database.get_articles())


@app.route('/api/articles/<article>', methods=["GET"])
def find_articles(article):
    try:
        if article is None:
            raise ValueError("article is not specified.")
        articlefinal = database.find_articles(article)
        if articlefinal is None:
            return make_response("No article with the given name.", 400)
        return jsonify(articlefinal)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

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

@app.route("/api/topic/<topics>", methods=["GET"]) 
def filter_by_Topic(topics):
    try:
        if topics is None:
            raise ValueError("topics is not specified.")
        topictype = database.filter_by_Topic(topics)
        if topictype is None:
            return make_response("No type found with the given topics.", 400)
        return jsonify(topictype)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/AddReply/<email>/<name>/<reply>', methods=["GET"])
def add_reply(email,name, reply):
    return jsonify(database.add_reply(email,name, reply))
        
@app.route("/api/type/<types>", methods=["GET"])
def filter_by_type(types):
    try:
        if types is None:
            raise ValueError("types is not specified.")
        typesnum = database.filter_by_type(types)
        if typesnum is None:
            return make_response("No type found with the given types.", 400)
        return jsonify(typesnum)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/signup/<FirstName>/<LastName>/<Email>/<Password>/<Description>/<Goals>/<Diet>/<Restrictions>', methods=["GET"])
def sign_up(FirstName,LastName, Email, Password, Description, Goals, Diet, Restrictions):
    try:
        res = database.sign_up(FirstName,LastName, Email, Password, Description, Goals, Diet, Restrictions)
        return jsonify(res)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/year/<years>", methods=["GET"])
def filter_by_year(years):
    try:
        if years is None:
            raise ValueError("years is not specified.")
        yearsnum = database.filter_by_year(years)
        if yearsnum is None:
            return make_response("No type found with the given types.", 400)
        return jsonify(yearsnum)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/get_usergroups/<ID>', methods=["GET"])
def get_usergroups(ID):
    return jsonify(database.get_usergroups(ID))

@app.route('/api/get_groupmemberinfo/<ID>', methods=["GET"])
def get_groupmemberinfo(ID):
        return jsonify(database.get_groupmemberinfo(ID))

@app.route('/api/default_img/<id>/<blob>', methods=["GET"])
def default_img(id, blob):
    try:
        res = database.default_img(id, blob)
        return jsonify(res)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
        
@app.route("/api/great/<greats>", methods=["GET"])
def filter_by_great(greats):
    try:
        if greats is None:
            raise ValueError("years is not specified.")
        greatsnum = database.filter_by_great(greats)
        if greatsnum is None:
            return make_response("No type found with the given types.", 400)
        return jsonify(greatsnum)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/less/<lesss>", methods=["GET"])
def filter_by_less(lesss):
    try:
        if lesss is None:
            raise ValueError("years is not specified.")
        lesssnum = database.filter_by_less(lesss)
        if lesssnum is None:
            return make_response("No type found with the given types.", 400)
        return jsonify(lesssnum)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/SearchArticles/<aname>", methods=["GET"])
def search_articles(aname):
    try:
        if aname is None:
            raise ValueError("focus is not specified.")
        articlename = database.search_articles(aname)
        if articlename is None:
            return make_response("No article with the given name.", 400)
        return jsonify(articlename)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/update_img/<id>/<blob>', methods=["GET"])
def update_img(id, blob):
    try:
        res = database.update_img(id, blob)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/get_userdata/<ID>', methods=["GET"])
def getid(ID):
    try:
        res = database.get_userdata(ID)
        if res is None:
            raise ValueError("Couldnt get data")
        return jsonify(res)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
    

@app.route('/api/groups', methods=["GET"])
def get_GroupInfo(): 
    return jsonify(database.get_GroupInfo())

@app.route('/api/group/<groupname>', methods=["GET"])
def getGroup(groupname): 
    return jsonify(database.getGroup(groupname))

@app.route('/api/searchForGroups/<name>', methods=["GET"])
def searchForGroups(name): 
    try:
        if name is None:
            raise ValueError("Group is not specified.")
        group = database.searchForGroups(name)
        if group is None:
            return make_response("No Group found with the given name.", 404)
        return jsonify(group)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/recent/<recents>', methods=["GET"])
def get_recent(recents):
    try:
        res = database.get_recent(recents)
        return jsonify(res)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/get_user_forums/<ID>', methods=["GET"])
def get_user_forums(ID):
    return jsonify(database.get_user_forums(ID))
@app.route('/api/filterexercise/<exercise>', methods=["GET"])
def filterexercise(exercise): 
    return jsonify(database.filterexercise(exercise))

@app.route('/api/filtercalories/<calories>', methods=["GET"])
def filtercalories(calories): 
    return jsonify(database.filtercalories(calories))

@app.route('/api/members/<Name>', methods=["GET"])
def getMemberInfo(Name): 
    return jsonify(database.getMemberInfo(Name))

@app.route('/api/joingroup/<groupname>/<username>/<name>/', methods=["GET"])
def JoinGroup(groupname, username, name): 
    return jsonify(database.JoinGroup(groupname, username, name))

@app.route('/api/insert_saved_recipes/<ID>/<Name>/<path:URL>')
def insert_saved_recipes(ID, Name, URL):
    return jsonify(database.insert_saved_recipes(ID, Name, URL))

@app.route('/api/insert/<ID>/<Name>')
def insert(ID, Name):
    return jsonify(database.insert(ID, Name))

@app.route('/api/get_saved_recipes/<ID>')
def get_saved_recipes(ID):
    return jsonify(database.get_saved_recipes(ID))
@app.route('/api/write/<writes>', methods=["GET"])
def write_recent(writes):
    try:
        rest = database.write_recent(writes)
        return jsonify(rest)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
