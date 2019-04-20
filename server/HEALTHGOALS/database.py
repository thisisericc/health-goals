from sqlalchemy import create_engine
from sqlalchemy import sql 

from HEALTHGOALS import config

engine = create_engine(config.database_uri)

def get_GroupInfo():
        with engine.connect() as con:
                rs = con.execute("SELECT GroupNumber, NameOfGroup, TrainingType, CalorieGoal FROM GroupInfo;")
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
                query = sql.text("SELECT GroupNumber, NameOfGroup, TrainingType, CalorieGoal FROM GroupInfo WHERE NameOfGroup LIKE :name;")
                rs = con.execute(query, name=nameFinal)
                return [dict(row) for row in rs]

def filterexercise(exercise):
        with engine.connect() as con:
                exerciseFinal = "%" + exercise + "%" 
                query = sql.text("SELECT GroupNumber, NameOfGroup, TrainingType, CalorieGoal FROM GroupInfo WHERE TrainingType LIKE :exercise;")
                rs = con.execute(query, exercise=exerciseFinal)
                return [dict(row) for row in rs]

def filtercalories(calories):
        with engine.connect() as con:
                caloriesFinal = "%" + calories + "%" 
                query = sql.text("SELECT GroupNumber, NameOfGroup, TrainingType, CalorieGoal FROM GroupInfo WHERE CalorieGoal LIKE :calories;")
                rs = con.execute(query, calories=caloriesFinal)
                return [dict(row) for row in rs]

def getMemberInfo(Name):
        with engine.connect() as con:
                NameFinal = "%" + Name + "%" 
                query = sql.text("SELECT * FROM GroupMemberInfo WHERE NameOfGroup LIKE :Name;")
                rs = con.execute(query, Name=NameFinal)
                return [dict(row) for row in rs]

def JoinGroup(groupname, username):
         with engine.connect() as con:
                query = sql.text("INSERT INTO GroupMemberInfo (NameOfGroup,UserID) VALUES (:groupname, :username);")
                rs = con.execute(query, groupname=groupname, username=username)


