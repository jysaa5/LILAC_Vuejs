from flask import Flask, g, request, Response, make_response
from flask import session, render_template, Markup
from datetime import datetime, date, timedelta
from dateutil.relativedelta import relativedelta
import os
from flask_cors import CORS
from backend.db.init_db import init_database, db_session

app = Flask(__name__)
from backend.routes import views

CORS(app)

app.debug = True
app.config.update(
	SECRET_KEY='X1243yRH!mMwf',
	SESSION_COOKIE_NAME='pyweb_flask_session',
	PERMANENT_SESSION_LIFETIME=timedelta(31)
)

@app.before_first_request
def beforeFirstRequest():
    print(">> before_first_request!!")
    init_database()   # initialize database 


@app.after_request
def afterReq(response):
    print(">> after_request!!")
    return response


@app.teardown_request
def teardown_request(exception):
    print(">>> teardown request!!", exception)


@app.teardown_appcontext
def teardown_context(exception):
    print(">>> teardown context!!", exception)
    db_session.remove()   # remove used db-session