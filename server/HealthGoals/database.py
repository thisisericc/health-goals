from sqlalchemy import create_engine
from sqlalchemy import sql

from HealthGoals import config

engine = create_engine(config.database_uri)

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
        rs = con.execute("SELECT ForumNumber, NameOfForum, Link, Description, Topic FROM MentalHealthForums;")
        return [dict(row) for row in rs]

def get_latest_forums():
    with engine.connect() as con:
        rs = con.execute("SELECT ForumNumber, NameOfForum, Link, Description, Topic FROM MentalHealthForums LIMIT 10;")
        return [dict(row) for row in rs]

def find_forum(name):
    with engine.connect() as con: 
        name = "%" + name + "%"    
        query = sql.text("SELECT NameOfForum, Link, Description, Topic FROM MentalHealthForums WHERE NameOfForum LIKE :name;")
        rs = con.execute(query, name=name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def filter_by_topic(topic):
    with engine.connect() as con: 
        query = sql.text("SELECT NameOfForum, Link, Description, Topic FROM MentalHealthForums WHERE Topic = :topic;")
        rs = con.execute(query, topic=topic)
        return [dict(row) for row in rs]       

def search_forums(name):
    with engine.connect() as con: 
        nameFinal = "%" + name + "%"
        query = sql.text("SELECT NameOfForum, Link, Description, Topic FROM MentalHealthForums WHERE NameOfForum LIKE :name;")
        rs = con.execute(query, name=nameFinal)
        return [dict(row) for row in rs]

def post_forum(name, description, topic):
    with engine.connect() as con: 
        query = sql.text("INSERT INTO MentalHealthForums (NameOfForum, Description, Topic) VALUES (:name, :description, :topic);")
        rs = con.execute(query, name=name, description=description, topic=topic)

def count_num_forums():
    with engine.connect() as con: 
        query = sql.text("SELECT COUNT(*) FROM MentalHealthForums;")
        rs = con.execute(query)
        return [dict(row) for row in rs]

'''be wary'''

def get_articles():
        with engine.connect() as con:
                rs = con.execute("SELECT ArticleName, Link, Author, Year, ArticleType FROM MentalHealthArticles;")
                return [dict(row) for row in rs]
def find_articles(name):
        with engine.connect() as con:
                nameFinal = "%" + name + "%"
                query = sql.text(
                        " SELECT * from MentalHealthArticles WHERE ArticleName LIKE :name;"
                )
                rs = con.execute(query, name=nameFinal)
                result = rs.first()
                if result is None:
                        return None
                return dict(result)

             
def filter_by_Topic(topics):
        with engine.connect() as con:
                string = "%" + topics+ "%"
                query = sql.text(
                        "SELECT * from MentalHealthArticles WHERE Topic LIKE :string;"
                )
                rs = con.execute(query, string = string)
                return [dict(row) for row in rs]

def filter_by_type(types):
        with engine.connect() as con:
                string = "%" + types+ "%"
                query = sql.text(
                        "SELECT * from MentalHealthArticles WHERE ArticleType LIKE :string;"
                )
                rs = con.execute(query, string = string)
                return [dict(row) for row in rs]

def filter_by_year(years):
        with engine.connect() as con:
                string = "%" + years+ "%"
                query = sql.text(
                        "SELECT * from MentalHealthArticles WHERE Year BETWEEN 2000 AND 2010;"
                )
                rs = con.execute(query, string = string)
                return [dict(row) for row in rs]
def filter_by_great(greats):
        with engine.connect() as con:
                string = "%" + greats+ "%"
                query = sql.text(
                        "SELECT * from MentalHealthArticles WHERE Year > 2010;"
                )
                rs = con.execute(query, string = string)
                return [dict(row) for row in rs]
def filter_by_less(lesss):
        with engine.connect() as con:
                string = "%" + lesss+ "%"
                query = sql.text(
                        "SELECT * from MentalHealthArticles WHERE Year < 2000;"
                )
                rs = con.execute(query, string = string)
                return [dict(row) for row in rs]
def search_articles(aname):
        with engine.connect() as con:
                nameFinal = "%" + aname + "%"
                query = sql.text(
                        " SELECT * from MentalHealthArticles WHERE ArticleName LIKE :aname;"
                )
                rs = con.execute(query, aname=nameFinal)
                return [dict(row) for row in rs]
