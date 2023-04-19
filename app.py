from flask import Flask, render_template, request
from pymongo import MongoClient
from pprint import pprint

app = Flask(__name__)

mongo = MongoClient('localhost', port=27017)

db = mongo.flask_db

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/v1.0/wines')
def wines():
    return()
