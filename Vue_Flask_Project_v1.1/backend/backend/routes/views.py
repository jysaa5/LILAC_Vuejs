from flask import render_template, request, Response, session, jsonify, make_response, redirect
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token

from datetime import datetime, date
from sqlalchemy.orm import subqueryload, joinedload
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.sql import func

from backend import app
from backend.db.init_db import db_session
from backend.models.models import Users, Tasks
import os

bcrypt = Bcrypt(app)
jwt = JWTManager(app)


@app.route('/api/register', methods=['POST'])
def register():
    first_name = request.get_json()['first_name']
    last_name = request.get_json()['last_name']
    email = request.get_json()['email']
    password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')
    created = datetime.utcnow()

    u = Users(first_name, last_name, email, password, created)
    try:
        db_session.add(u)
        db_session.commit()
    except:
        db_session.rollback()
    
    
    result = {
        'first_name': first_name,
        'last_name': last_name,
        'email': email,
        'password': password,
        'created': created
    }
    
    print("%s 님, 가입을 환영합니다!" % first_name)
    return jsonify({'result': result})


@app.route('/api/login', methods=['POST'])
def login():
    email = request.get_json()['email']
    password = request.get_json()['password']
    result = ""

    info = Users.query.filter(Users.email==email).first()
    print('>>>>>Query: ',info)
    
    r = bcrypt.check_password_hash(info.password, password)
    print(r)
    if r is not None:
        session['loginUser'] = {'userid': info.id, 'name': info.first_name}
        print(session)
        access_token = create_access_token(
            identity={
                'first_name': info.first_name,
                'last_name': info.last_name,
                'email': info.email
            })
        result = access_token
        print(result)
    else:
        result = jsonify({"error": "Invalid username and password"})

    return result


@app.route('/api/logout')
def logout():
    if session.get('loginUser'):
        del session['loginUser']
    print('로그아웃되었습니다.')
    return jsonify({"success" : True})


@app.route('/api/tasks', methods=['GET'])
def get_all_tasks():
    article = []
    result = ''
    title = []
    content = []
    id = []
    #tasks = Tasks.query.all()
    if(session.get('loginUser')):
        login = session.get('loginUser')
        print('>>>>>>>>>>session: ',login)
        login_id = login.get('userid')
        tasks = Tasks.query.filter(Users.id==login_id).all()
        print('>>>>>>Query:', tasks)
        print(type(tasks))
        for a in tasks:
            print('>>>글목록:',a)
            result ={
            'id': a.id,
            'title': a.title,
            'content': a.content
            } 
            article.append(result)
        print(article)
        return jsonify(article)
    else:
        return jsonify({'user': False})
    

@app.route('/api/task', methods=['POST'])
def add_task():
    title = request.get_json()['title']
    content = request.get_json()['content']
    login = session.get('loginUser')
    print('>>>>>>>>>>session: ',login)
    login_id = login.get('userid')
    result = ''

    info = Users.query.filter(Users.id==login_id).first()
    t = Tasks(login_id, title, content)
    try:
        db_session.add(t)
        db_session.commit()
        
        result = {
        'u_id': login_id,
        'title': title,
        'content': content
        }
        
        print("%s 님, 게시물 저장이 완료되었습니다." % info.first_name)
    
    except:
        db_session.rollback()
        
        result = {
        'Success': False
        }
    
    return jsonify({'result': result})


@app.route('/api/task/<id>', methods=['PUT'])
def update_task(id):
    title = request.get_json()['title']
    content = request.get_json()['content']
    result = ''

    task = Tasks.query.filter(Tasks.id == id).update({'title': str(title), 'content': str(content)})

    try:
        db_session.commit()
        
        result = {
        'id': id,
        'title': title,
        'content': content
        }
    except:
        db_session.rollback()
        
        result = {
        'Success': False
        }
    

    return jsonify({'result': result})


@app.route('/api/task/<id>', methods=['DELETE'])
def delete_task(id):
    task = Tasks.query.filter(Tasks.id==id).first()
    result = ''

    try:
        db_session.delete(task)
        db_session.commit()

        result = {
        'Success': True
        }

    except:
        db_session.rollback()
        
        result = {
        'Success': False
        }
    
    return jsonify({'result': result})




