from sqlalchemy import Column, Integer, Float, String, DateTime, TIMESTAMP, ForeignKey, PrimaryKeyConstraint, func, Table
from sqlalchemy.orm import relationship, backref
from backend.db.init_db import Base


class Users(Base):
    __tablename__='users'
    id = Column(Integer, primary_key=True)
    first_name = Column(String)
    last_name = Column(String)
    email = Column(String, unique=True)
    password = Column(String)
    created = Column(DateTime)

    def __init__(self, first_name='gest', last_name='gest', email=None, password=None, created=None, makeSha=False):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        if makeSha:
            self.password = func.sha2(password, 256)
        else:
            self.password = password
        self.created = created
    
    def __repr__(self):
        return 'Users %s, %r, %r, %r' % (self.id, self.first_name, self.last_name, self.email)


class Tasks(Base):
    __tablename__='tasks'
    id = Column(Integer, primary_key=True)
    u_id = Column(Integer, ForeignKey('users.id')) #실제 테이블
    title = Column(String)
    content = Column(String)
    user = relationship('Users')

    def __init__(self, u_id, title, content):
        self.u_id = u_id
        self.title = title
        self.content = content
    
    def __repr__(self):
        return 'User %s, %s' % (self.title, self.content)
