from sqlalchemy import create_engine
from sqlalchemy import sql

from HealthGoals import config

engine = create_engine(config.database_uri)

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

def get_login(email, password):
    with engine.connect() as con:
        query = sql.text("SELECT * FROM Users WHERE Email =:email AND Password =:password")
        rs = con.execute(query, email=email, password=password)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def getid(email, password):
    with engine.connect() as con:
        query = sql.text("SELECT ID FROM Users WHERE Email =:email AND Password =:password")
        rs = con.execute(query, email=email, password=password)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def sign_up(FirstName, LastName, Email, Password, Description, Goals, DietaryRestrictions, Picture):
    with engine.connect() as con:
        query = sql.text(
            "INSERT INTO Users (FirstName, LastName, Email, Password, Description, Goals, DietaryRestrictions, Picture) VALUES (:FirstName, :LastName, :Email, :Password, :Description, :Goals, :DietaryRestrictions, :Picture);"
        )
        rs = con.execute(query, FirstName=FirstName, LastName=LastName, Email=Email, Password=Password, Description=Description, Goals=Goals, DietaryRestrictions=DietaryRestrictions, Picture=Picture)


