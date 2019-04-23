from sqlalchemy import create_engine
from sqlalchemy import sql

from HealthGoals import config

engine = create_engine(config.database_uri)

def saved_videos(videoname,userid):
        with engine.connect() as con:
                query = sql.text("INSERT INTO SavedVideos (ID, VideoName) VALUES (:userid, :videoname);")
                rs = con.execute(query, userid = userid, videoname=videoname)
def get_saved_videos(userid):
        with engine.connect() as con:
                query = sql.text("SELECT * FROM SavedVideos WHERE ID = :userid;")
                rs = con.execute(query, userid = userid)
                return [dict(row) for row in rs]
def get_videos():
        with engine.connect() as con:
                rs = con.execute("SELECT VideoName, Difficulty, TrainingType, Link, FinalLink, ImageLink FROM ExerciseVideos;")
                return [dict(row) for row in rs]

def find_videos(name):
        with engine.connect() as con:
                nameFinal = "%" + name + "%"
                query = sql.text(
                        " SELECT * from ExerciseVideos WHERE VideoName LIKE :name;"
                )
                rs = con.execute(query, name=nameFinal)
                result = rs.first()
                if result is None:
                        return None
                return dict(result)


def filter_by_Training(training):
        with engine.connect() as con:
                string = "%" + training+ "%"
                query = sql.text(
                        "SELECT * from ExerciseVideos WHERE TrainingType LIKE :string;"
                )
                rs = con.execute(query, string = string)
                return [dict(row) for row in rs]

def filter_by_difficulty(difficulty):
        with engine.connect() as con:
                query = sql.text("SELECT * from ExerciseVideos WHERE Difficulty = :difficulty;")
                rs = con.execute(query, difficulty=difficulty)
                return [dict(row) for row in rs]

def filter_by_bodyfocus(focus):
        with engine.connect() as con:
                string = "%" + focus+ "%"
                query = sql.text(
                        "SELECT * from ExerciseVideos WHERE BodyFocus LIKE :string;"
                )
                rs = con.execute(query, string = string)
                return [dict(row) for row in rs]

'''def filter_combine(training,difficulty,focus):
        with engine.connect() as con:
                string1 = "%" + training + "%"
                string2 = "%" + focus + "%"
                query = sql.text(
                        " SELECT * from ExerciseVideos WHERE TrainingType LIKE :string1 AND Difficulty = :difficulty AND BodyFocus LIKE :string2;"
                )
                rs = con.execute(query, string2 = string2, difficulty = difficulty, string1 = string1)
                return [dict(row) for row in rs]

def filter_td(training,difficulty):
        with engine.connect() as con:
                string1 = "%" + training + "%"
                query = sql.text(
                        " SELECT * from ExerciseVideos WHERE TrainingType LIKE :string1 AND Difficulty = :difficulty;"
                )
                rs = con.execute(query, string1 = string1, difficulty = difficulty)
                return [dict(row) for row in rs]

def filter_tf(training,focus):
        with engine.connect() as con:
                string1 = "%" + training + "%"
                string2 = "%" + focus + "%"
                query = sql.text(
                        " SELECT * from ExerciseVideos WHERE TrainingType LIKE :string1 AND BodyFocus LIKE :string2;"
                )
                rs = con.execute(query, string1 = string1, string2 = string2)
                return [dict(row) for row in rs]

def filter_df(difficulty,focus):
        with engine.connect() as con:
                string2 = "%" + focus + "%"
                query = sql.text(
                        " SELECT * from ExerciseVideos WHERE Difficulty = :difficulty AND BodyFocus LIKE :string2;"
                )
                rs = con.execute(query, difficulty=difficulty, string2 = string2)
                return [dict(row) for row in rs]
'''
def search_videos(name):
        with engine.connect() as con:
                nameFinal = "%" + name + "%"
                query = sql.text(
                        " SELECT * from ExerciseVideos WHERE VideoName LIKE :name;"
                )
                rs = con.execute(query, name=nameFinal)
                return [dict(row) for row in rs]

def get_forums():
    with engine.connect() as con:
        rs = con.execute("SELECT ForumNumber, NameOfForum, Link, Description, Topic, Email FROM MentalHealthForums;")
        return [dict(row) for row in rs]

def get_forum_byemail(Email):
    with engine.connect() as con:
        query = sql.text(
                "SELECT ForumNumber, NameOfForum, Link, Description, Topic, Email FROM MentalHealthForums WHERE Email=:Email;"
                )
        rs = con.execute(query, email=email)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def get_user_forums(ID):
        with engine.connect() as con:
                query = sql.text(
                        "SELECT NameOfForum, Description, Email FROM MentalHealthForums WHERE Email= (Select Email FROM Users2 WHERE Users2.ID =:ID)"
                )
                rs = con.execute(query, ID=ID)
                return [dict(row) for row in rs]

def get_latest_forums():
    with engine.connect() as con:
        rs = con.execute("SELECT ForumNumber, NameOfForum, Link, Description, Topic, Email FROM MentalHealthForums LIMIT 10;")
        return [dict(row) for row in rs]

def find_forum(name):
    with engine.connect() as con: 
        name = "%" + name + "%"    
        query = sql.text("SELECT ForumNumber, NameOfForum, Link, Description, Topic, Email FROM MentalHealthForums WHERE NameOfForum LIKE :name;")
        rs = con.execute(query, name=name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def filter_by_topic(topic):
    with engine.connect() as con: 
        query = sql.text("SELECT ForumNumber, NameOfForum, Link, Description, Topic, Email FROM MentalHealthForums WHERE Topic = :topic;")
        rs = con.execute(query, topic=topic)
        return [dict(row) for row in rs]       

def search_forums(name):
    with engine.connect() as con: 
        nameFinal = "%" + name + "%"
        query = sql.text("SELECT ForumNumber, NameOfForum, Link, Description, Topic, Email FROM MentalHealthForums WHERE NameOfForum LIKE :name;")
        rs = con.execute(query, name=nameFinal)
        return [dict(row) for row in rs]

def post_forum(email, name, description, topic):
    with engine.connect() as con: 
        query = sql.text("INSERT INTO MentalHealthForums (Email, NameOfForum, Description, Topic) VALUES (:email, :name, :description, :topic);")
        rs = con.execute(query, email=email, name=name, description=description, topic=topic)

def count_num_forums():
    with engine.connect() as con: 
        query = sql.text("SELECT COUNT(*) FROM MentalHealthForums;")
        rs = con.execute(query)
        return [dict(row) for row in rs]

def get_replies(name):
    with engine.connect() as con: 
        name = "%" + name + "%"    
        query = sql.text("SELECT ForumNumber, NameOfForum, ForumReplyNumber, Description, Email FROM MentalHealthForumReplies WHERE NameOfForum LIKE :name;")
        rs = con.execute(query, name=name)
        return [dict(row) for row in rs]

def add_reply(email, name, reply):
    with engine.connect() as con: 
        query = sql.text("INSERT INTO MentalHealthForumReplies (Email, NameOfForum, Description) VALUES (:email, :name, :reply);")
        rs = con.execute(query, email = email, name=name, reply=reply)

def get_login(email, password):
    with engine.connect() as con:
        query = sql.text("SELECT * FROM Users2 WHERE Email =:email AND Password =:password")
        rs = con.execute(query, email=email, password=password)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def get_userdata(ID):
    with engine.connect() as con:
        query = sql.text("SELECT * FROM Users2 WHERE ID=:ID")
        rs = con.execute(query, ID=ID)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def sign_up(FirstName, LastName, Email, Password, Description, Goals, Diet, Restrictions):
    with engine.connect() as con:
        query = sql.text(
            "INSERT INTO Users2 (FirstName, LastName, Email, Password, Description, Goals, Diet, Restriction) VALUES (:FirstName, :LastName, :Email, :Password, :Description, :Goals, :Diet, :Restrictions);"
        )
        rs = con.execute(query, FirstName=FirstName, LastName=LastName, Email=Email, Password=Password, Description=Description, Goals=Goals, Diet=Diet, Restrictions=Restrictions)


def get_Instructors():
        with engine.connect() as con:
                rs = con.execute("SELECT Name, Number, Address, Zip, Tags, Image_URL, Certification, About, Rates FROM Instructors;")
                return [dict(row) for row in rs]

def find_Instructor(name):
        with engine.connect() as con:
                nameFinal = "%" + name + "%"
                query = sql.text(
                        " SELECT * from Instructors WHERE Name LIKE :name;"
                )
                rs = con.execute(query, name=nameFinal)
                result = rs.first()
                if result is None:
                        return None
                return dict(result)

def filter_by_Tags(tags):
        with engine.connect() as con:
                string = "%" + tags+ "%"
                query = sql.text(
                        "SELECT * from Instructors WHERE Tags LIKE :string;"
                )
                rs = con.execute(query, string = string)
                return [dict(row) for row in rs]

def get_usergroups(ID):
     with engine.connect() as con:
        query = sql.text(
                "SELECT * FROM GroupInfo Where GroupInfo.GroupNumber = (SELECT GroupNumber from GroupMemberInfo where GroupMemberInfo.UserID=:ID)"
        )
        rs = con.execute(query, ID=ID)
        return [dict(row) for row in rs]

def get_groupmemberinfo(ID):
     with engine.connect() as con:
        query = sql.text(
                "SELECT * FROM GroupMemberInfo where GroupMemberInfo.UserID=:ID"
        )
        rs = con.execute(query, ID=ID)
        return [dict(row) for row in rs]

def default_img(id, blob):
     with engine.connect() as con:
        query = sql.text(
                "INSERT INTO Pictures (id, blob) VALUES (:id, :blob)"
        )
        rs = con.execute(query, id=id, blob=blob)
        result = rs.first()
        if result is None:
                return None
        return dict(result)        

def update_img(id, blob):
     with engine.connect() as con:
        query = sql.text(
                "UPDATE `Pictures` SET `blob` = :blob WHERE `id` =: ID;"
        )
        rs = con.execute(query, blob= blob, id=id)
        result = rs.first()
        if result is None:
                return None
        return dict(result)
def get_GroupInfo():
        with engine.connect() as con:
                rs = con.execute("SELECT GroupNumber, NameOfGroup, TrainingType, CalorieGoal, Images FROM GroupInfo;")
                return [dict(row) for row in rs]

def getGroup(groupname):
        with engine.connect() as con:
                groupnameFinal = "%" + groupname + "%" 
                query = sql.text("SELECT * FROM GroupInfo WHERE NameOfGroup LIKE :groupname;")
                rs = con.execute(query, groupname=groupnameFinal)
                results=rs.first()
                return dict(results)

def searchForGroups(name):
        with engine.connect() as con:
                nameFinal = "%" + name + "%" 
                query = sql.text("SELECT * from GroupInfo WHERE NameOfGroup LIKE :name;")
                rs = con.execute(query, name=nameFinal)
                return [dict(row) for row in rs]

def filterexercise(exercise):
        with engine.connect() as con:
                exerciseFinal = "%" + exercise + "%" 
                query = sql.text("SELECT GroupNumber, NameOfGroup, TrainingType, CalorieGoal, Images FROM GroupInfo WHERE TrainingType LIKE :exercise;")
                rs = con.execute(query, exercise=exerciseFinal)
                return [dict(row) for row in rs]

def filtercalories(calories):
        with engine.connect() as con:
                caloriesFinal = "%" + calories + "%" 
                query = sql.text("SELECT GroupNumber, NameOfGroup, TrainingType, CalorieGoal, Images FROM GroupInfo WHERE CalorieGoal LIKE :calories;")
                rs = con.execute(query, calories=caloriesFinal)
                return [dict(row) for row in rs]

def getMemberInfo(Name):
        with engine.connect() as con:
                NameFinal = "%" + Name + "%" 
                query = sql.text("SELECT * FROM GroupMemberInfo WHERE NameOfGroup LIKE :Name;")
                rs = con.execute(query, Name=NameFinal)
                return [dict(row) for row in rs]

def JoinGroup(groupname, username, name):
         with engine.connect() as con:
                query = sql.text("INSERT INTO GroupMemberInfo (NameOfGroup,UserID,MemberName) VALUES (:groupname, :username, :name);")
                rs = con.execute(query, groupname=groupname, username=username, name=name)
